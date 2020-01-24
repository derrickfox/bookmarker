import { Component, OnInit, OnDestroy } from '@angular/core';
import { Item } from './items/item/item.model';
import { Tag } from '../tags/tag/tag.model';
import { Router, ActivatedRoute } from '@angular/router';
import { TagsService } from '../tags/tagsService.service';
import { ItemService } from './items/item/item.service';
import { Subject } from 'rxjs';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';

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

	constructor(
		private itemService: ItemService,
		private router: Router,
		private route: ActivatedRoute,
		private tagsService: TagsService) { }

	ngOnInit() {
		this.items = this.itemService.getItems();
		this.selectedTags = this.tagsService.getSelectedTags();

		this.tagsService.newTag.subscribe(newTag => {
			console.log('ngOnInit', newTag);
			this.filterTagsAnd(newTag);		
		})
		this.tagsService.selectedTagsChanged.subscribe(tags => {
			console.log('tags ngOnInit', tags);
			if (tags.length === 0) {
				console.log('no tags!');
				this.filteredItems = [];
			}
			// this.selectedTags = tags;
			// this.filterTagsOr();
		})
	}

	filterTagsAnd(newTag: Tag) {
		// let intersection = arrA.filter(x => arrB.includes(x));

		let passed = false;
		let allChecks = []

		if(this.filteredItems.length === 0){
			this.items.map(item => {
				item.tags.map(tag => {
					if(tag.name === newTag.name){
						this.filteredItems.push(item);
					}
				})
			})
		}else{
			// this.filteredItems = []
			console.log('this.filteredItems', this.filteredItems)
			let uniqueItemSet = new Set<Item>();
			this.filteredItems.map(filteredItem => {
				let itemTagsStrings = [];
				filteredItem.tags.map(tag => {
					itemTagsStrings.push(tag.name);
				})
				if (itemTagsStrings.includes(newTag.name)) {
					passed = true;
				}
				if(passed){
					this.filteredItems.push(filteredItem);
					uniqueItemSet.add(filteredItem);
					console.log('this.filteredItems', this.filteredItems);
					console.log('uniqueItemSet', uniqueItemSet);
					this.filteredItems = [];
					uniqueItemSet.forEach(item => {
						this.filteredItems.push(item);
						console.log('new filteredItems', this.filteredItems);
					})
				}else{
					this.filteredItems = []
				}
			})
		}
	}

	filterTagsOr() {
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

	onItemClicked(item: Item) {
		this.selectedTags = this.tagsService.getSelectedTags();
		console.log('item', item);
		this.selectedTagsChanged.next(this.selectedTags);
	}

	onNewItem() {
		this.router.navigate(['new'], { relativeTo: this.route })
	}

	ngOnDestroy() {
	}

}
