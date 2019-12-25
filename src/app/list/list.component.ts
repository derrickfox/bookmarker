import { Component, OnInit } from '@angular/core';
import { Item } from '../list/item/item.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ItemService } from '../list/item/item.service';
import { Subject } from 'rxjs';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
    itemsChanged = new Subject<Item[]>();

	items: Item[]

	constructor(private itemService: ItemService, router: Router, route: ActivatedRoute) {
	}

	ngOnInit() {
		this.items = this.itemService.getItems();
		console.log('list.component', this.items);
	}

}
