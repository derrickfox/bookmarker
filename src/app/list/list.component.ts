import { Component, OnInit } from '@angular/core';
import { Item } from './items/item/item.model';
import { Tag } from '../tags/tag/tag.model';
import { Router, ActivatedRoute } from '@angular/router';
import { TagsService } from '../tags/tagsService.service';
import { ItemService } from './items/item/item.service';
import { ListService } from './list.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
	items: Item[];
	filterdItems: Item[] = [];
	searchTermSubscription: Subscription;
	searchTerm: string;
	selectedTags: Tag[];

	constructor(
		private itemService: ItemService, 
		private router: Router, 
		private route: ActivatedRoute,
		private listService: ListService,
		private tagsService: TagsService) { }

	ngOnInit() {
		this.items = this.itemService.getItems();

		this.itemService.itemsChanged.subscribe(
			(items: Item[]) => {
				this.items = items;
			}
		)
		this.tagsService.selectedTagsChanged.subscribe(tags => {
			this.filterTags(tags);
		})
		// this.listService.emitTags.subscribe(tagInput => {
		// 	this.filterdItems = []
		// 	this.items.map(item => {
		// 		item.tags.map(tag => {
		// 			if (tag.name === tagInput.name) {
		// 				this.filterdItems.push(item);
		// 			}
		// 		})
		// 	})
		// 	if (this.filterdItems.length == 0) {
		// 		this.filterdItems = this.items;
		// 	}else{
		// 		this.filterdItems;
		// 	}
		// })
	}

	filterTags(tags: Tag[]) {
		this.filterdItems = []
		tags.map(tag => {
			this.items.map(item => {
				item.tags.map(itemTag => {
					if (tag.name === itemTag.name) {
						if (!this.filterdItems.includes(item)) {
							this.filterdItems.push(item);
						}
					}
				})
			})
		})
	}

	onNewItem() {
		this.router.navigate(['new'], { relativeTo: this.route })
	}

}
