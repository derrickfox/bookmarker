import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Item } from '../item.model';
import { ItemService } from '../item.service';

@Component({
	selector: 'app-item-detail',
	templateUrl: './item-detail.component.html',
	styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

	item: Item
	id: number

	constructor(private itemService: ItemService, private router: Router, private route: ActivatedRoute) { }

	ngOnInit() {
		this.route.params.subscribe(
			(params: Params) => {
				// The + sign is to cast the string to a number.
				this.id = +params['id'];
				this.item = this.itemService.getItem(this.id);
			}
		);
	}

	onEditItem() {
		this.router.navigate(['edit'], { relativeTo: this.route });
	}

	onDeleteItem() {
		this.itemService.deleteRecipe(this.id);
		this.router.navigate(['/items']);
	}
}
