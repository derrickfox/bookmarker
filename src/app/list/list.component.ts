import { Component, OnInit, OnDestroy } from '@angular/core';
import { Item } from './items/item/item.model';
import { Tag } from '../tags/tag/tag.model';
import { Router, ActivatedRoute } from '@angular/router';
import { TagsService } from '../tags/tagsService.service';
import { ItemService } from './items/item/item.service';
import { ListService } from './list.service';
import { Subscription, Subject } from 'rxjs';

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
	selectedTagsChanged = new Subject<Tag[]>()
	itemSubscription: Subscription;
	tagSubscription: Subscription;
	searchTermSubscription: Subscription;

	constructor(
		private itemService: ItemService, 
		private router: Router, 
		private route: ActivatedRoute,
		private listService: ListService,
		private tagsService: TagsService) { }

	ngOnInit() {
		this.items = this.itemService.getItems();

		this.itemSubscription = this.itemService.itemsChanged.subscribe(
			(items: Item[]) => {
				this.items = items;
			}
		)
		this.selectedTags = this.tagsService.getSelectedTags();
		this.tagsService.selectedTagsChanged.subscribe(tags => {
			console.log('list.component -> ngOnInit() -> this.tagsService.selectedTagsChanged -> tags', tags);
			tags.map(tag => {
				this.filterTags(tags);
			})
		})
	}

	onItemClicked(item: Item) {
		// this.itemService.itemsChanged.next(this.filteredItems);
		this.selectedTags = this.tagsService.getSelectedTags();
		console.log('onItemClicked -> this.selectedTags', this.selectedTags);
		this.selectedTagsChanged.next(this.selectedTags);
	}

	filterTags(tags: Tag[]) {
		tags.map(tag => {
			this.items.map(item => {
				item.tags.map(itemTag => {
					if (tag.name === itemTag.name) {
						if (!this.filteredItems.includes(item)) {
							this.filteredItems.push(item);
							this.itemService.itemsChanged.next(this.filteredItems);
							console.log('this.filteredItems', this.filteredItems);
						}
					}
				})
			})
		})
	}

	onNewItem() {
		this.router.navigate(['new'], { relativeTo: this.route })
	}

	ngOnDestroy() {
		this.itemSubscription.unsubscribe();
		this.tagSubscription.unsubscribe();
		this.searchTermSubscription.unsubscribe();
	}

}
