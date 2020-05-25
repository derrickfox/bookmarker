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
	selectedItems: Item[] = [];

	constructor(
		private itemService: ItemService,
		private router: Router,
		private route: ActivatedRoute,
		private tagsService: TagsService) { }

	ngOnInit() {
		this.items = this.itemService.getItems();
		// this.selectedTags = this.tagsService.getSelectedTags();

		// this.tagsService.newTag.subscribe(newTag => {
		// 	this.filterTagsAnd(newTag);		
		// });

		this.tagsService.selectedTagsChanged.subscribe(tags => {
			if (tags.length === 0) {
				this.filteredItems = [];
			}
			this.selectedTags = tags;
			this.filterTagsAnd();		
		});
	}

	public isSuperset(set, subset) {
		for (let elem of subset) {
			if (!set.has(elem)) {
				return false
			}
		}
		return true
	}

	public intersection(setA, setB) {
		let _intersection = new Set()
		for (let elem of setB) {
			if (setA.has(elem)) {
				_intersection.add(elem)
			}
		}
		return _intersection
	}

	public filterTagsAnd():void {
		console.log('this.selectedTags', this.selectedTags);
		console.log('this.items', this.items);

		// Clear filtered items
		this.filteredItems = [];
		
		// Set of selected tag IDs
		let selectedIDsSet = new Set();
		this.selectedTags.map(tag => {
			selectedIDsSet.add(tag.id);
		})

		// Set of items tag IDs
		let itemTagIDsSet = new Set();
		this.items.map(item => {
			item.tags.map(tag => {
				itemTagIDsSet.add(tag.id);
			})
			let isSuperSetResult = this.isSuperset(itemTagIDsSet, selectedIDsSet);
			if(isSuperSetResult){
				console.log('IS a superset')
				this.filteredItems.push(item);
			}
		})

		// let resultIDsSet = this.intersection(selectedIDsSet, itemTagIDsSet);
	}

	// public filterTagsAnd(newTag: Tag):void {
	// 	// let intersection = arrA.filter(x => arrB.includes(x));

	// 	let passed = false;
	// 	let allChecks = []

	// 	if(this.filteredItems.length === 0){
	// 		this.items.map(item => {
	// 			item.tags.map(tag => {
	// 				if(tag.name === newTag.name){
	// 					this.filteredItems.push(item);
	// 				}
	// 			})
	// 		})
	// 	}else{
	// 		// this.filteredItems = []
	// 		let uniqueItemSet = new Set<Item>();
	// 		this.filteredItems.map(filteredItem => {
	// 			let itemTagsStrings = [];
	// 			filteredItem.tags.map(tag => {
	// 				itemTagsStrings.push(tag.name);
	// 			})
	// 			if (itemTagsStrings.includes(newTag.name)) {
	// 				passed = true;
	// 			}
	// 			if(passed){
	// 				this.filteredItems.push(filteredItem);
	// 				uniqueItemSet.add(filteredItem);
	// 				this.filteredItems = [];
	// 				uniqueItemSet.forEach(item => {
	// 					this.filteredItems.push(item);
	// 				})
	// 			}else{
	// 				this.filteredItems = []
	// 			}
	// 		})
	// 	}
	// }

	public filterTagsOr():void {
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

	public onItemClicked(item: Item):void {
		this.selectedTags = this.tagsService.getSelectedTags();
		this.selectedTagsChanged.next(this.selectedTags);
	}

	public onNewItem():void {
		this.router.navigate(['new'], { relativeTo: this.route })
	}

	public ngOnDestroy():void {
	}

}
