import { Component, OnInit } from '@angular/core';
import { Item } from '../list/item/item.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ItemService } from '../list/item/item.service';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

	items: Item[]

	constructor(private itemService: ItemService, router: Router, route: ActivatedRoute) {
	}

	ngOnInit() {
		this.items = this.itemService.getItems();
	}

}
