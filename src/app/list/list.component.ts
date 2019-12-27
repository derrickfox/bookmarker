import { Component, OnInit } from '@angular/core';
import { Item } from './items/item/item.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ItemService } from './items/item/item.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
	items: Item[];
	subscription: Subscription;

	constructor(private itemService: ItemService, private router: Router, private route: ActivatedRoute) { }

	ngOnInit() {
		this.subscription =	this.itemService.itemsChanged.subscribe(
			(items: Item[]) => {
				this.items = items;
			}
		)
		this.items = this.itemService.getItems();
	}

	onNewItem() {
		this.router.navigate(['new'], { relativeTo: this.route })
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

}
