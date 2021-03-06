import { Component, OnInit, OnDestroy } from '@angular/core';
import { Item } from './items/item/item.model';
import { Tag } from '../tags/tag/tag.model';
import { Router, ActivatedRoute } from '@angular/router';
import { TagsService } from '../tags/tagsService.service';
import { ItemService } from './items/item/item.service';
import { ListService } from '../list/list.service';
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
	selectedItems: Item[] = [];
	newlySelectedTag: Tag;

	constructor(
		private itemService: ItemService,
		private router: Router,
		private route: ActivatedRoute,
		private tagsService: TagsService,
		private listService: ListService) { }

	ngOnInit() {
		this.items = this.listService.getAllItems();
		this.tagsService.newTag.subscribe(newTag => {
			this.newlySelectedTag = newTag;
		})
		this.tagsService.selectedTagsChanged.subscribe(tags => {
			if (tags.length === 0) {
				this.filteredItems = [];
			}
			this.selectedTags = tags;
			this.filterTagsAnd();
		});
	}

	public filterTagsAnd(): void {
		this.filteredItems = [];
		let found = false;
		let tempItems = this.listService.getAllItems();
		tempItems.map(item => {
			item.tags.map(tag => {
				if (tag.id === this.newlySelectedTag.id) {
					found = true;
				}
			})
			if (found) {
				console.log('found!', item);
				this.filteredItems.push(item);

				found = false;
			}
		})
	}

	public filterTagsOr(): void {
		this.selectedTags.map(tag => {
			this.items.map(item => {
				if (!this.filteredItems.includes(item)) {
					item.tags.map(itemTag => {
						if (tag.name === itemTag.name) {
							if (!this.filteredItems.includes(item)) {
								this.filteredItems.push(item);
								this.itemService.itemsChanged.next(this.filteredItems.slice());
							}
						}
					})
				}
			})
		})
	}

	public onItemClicked(item: Item): void {
		this.selectedTags = this.tagsService.getSelectedTags();
		this.selectedTagsChanged.next(this.selectedTags);
	}

	public onNewItem(): void {
		this.router.navigate(['new'], { relativeTo: this.route })
	}

	public ngOnDestroy(): void {
	}

}
