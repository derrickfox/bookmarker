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
		this.listService.emitTags.subscribe(tagInput => {
			this.items.map(item => {
				item.tags.map(tag => {
					if (tag.name === tagInput.name) {
						this.filterdItems.push(item);
					}
				})
			})
		})
	}

	onNewItem() {
		this.router.navigate(['new'], { relativeTo: this.route })
	}

}
