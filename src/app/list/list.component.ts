import { Component, OnInit } from '@angular/core';
import { Item } from './items/item/item.model';
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
		this.listService.emitTags.subscribe(tagName => {
			// this.items = [];
			for (let item of this.items) {
				for (let tag of item.tags) {
					// console.log('item', item);
					// console.log('tag', tag);
					if (tag.name === tagName.name) {
						// console.log('Found Item! ->', item);
						this.filterdItems.push(item);
						console.log('this.filterdItems', this.filterdItems);
					}
				}
			}
		})
	}

	onNewItem() {
		this.router.navigate(['new'], { relativeTo: this.route })
	}

}
