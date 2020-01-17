import { Component, OnInit, OnDestroy } from '@angular/core';
import { Item } from './items/item/item.model';
import { Tag } from '../tags/tag/tag.model';
import { Router, ActivatedRoute } from '@angular/router';
import { TagsService } from '../tags/tagsService.service';
import { ItemService } from './items/item/item.service';
import { Subject } from 'rxjs';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {
	items: Item[];
	filteredItems: Item[] = [];
	searchTerm: string;
	selectedTags: Tag[] = [];
	selectedTagsChanged = new Subject<Tag[]>();
	selectedItems: Item[];

	constructor(
		private itemService: ItemService,
		private router: Router,
		private route: ActivatedRoute,
		private tagsService: TagsService) { }

	ngOnInit() {
		console.log('list.component:ngOnInit triggered')
		this.items = this.itemService.getItems();
		this.selectedTags = this.tagsService.getSelectedTags();

		this.tagsService.selectedTagsChanged.subscribe(tags => {
			this.selectedTags = tags;
			this.filterTags();
			console.log('list.component:ngOnInit():tagsService.selectedTagsChanged:selectedTags', this.selectedTags)
		})
	}

	filterTags() {
		this.selectedTags.map(tag => {
			console.log('tag', tag);
			this.items.map(item => {
				if (!this.filteredItems.includes(item)) {
					console.log('item', item);
					item.tags.map(itemTag => {
						// console.log('itemTag', itemTag);
						if (tag.name === itemTag.name) {
							console.log('itemTag.name', itemTag.name);
							if (!this.filteredItems.includes(item)) {
								this.filteredItems.push(item);
								console.log('final item', item);
								this.itemService.itemsChanged.next(this.filteredItems.slice());
								console.log('this.filteredItems', this.filteredItems);
							}
						}
					})
				}
			})
		})
	}

	onItemClicked(item: Item) {
		this.selectedTags = this.tagsService.getSelectedTags();
		this.selectedTagsChanged.next(this.selectedTags);
	}

	onNewItem() {
		this.router.navigate(['new'], { relativeTo: this.route })
	}

	ngOnDestroy() {
	}

}
