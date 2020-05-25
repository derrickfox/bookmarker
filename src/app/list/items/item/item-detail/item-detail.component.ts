import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Item } from '../item.model';
import { Tag } from '../../../../tags/tag/tag.model';
import { ItemService } from '../item.service';
import { Subject } from 'rxjs';
import { TagsService } from 'src/app/tags/tagsService.service';

@Component({
	selector: 'app-item-detail',
	templateUrl: './item-detail.component.html',
	styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

	item: Item
	id: number
	testTag = new Subject<Tag>()
	message: string

	constructor(
		private itemService: ItemService, 
		private router: Router, 
		private route: ActivatedRoute,
		private tagsService: TagsService) { }

	ngOnInit() {
		this.route.params.subscribe(
			(params: Params) => {
				// The + sign is to cast the string to a number.
				this.id = +params['id'];
				this.item = this.itemService.getItem(this.id);
			}
		);
		// this.itemService.itemsChanged.subscribe(items)
	}

	onEditItem() {
		this.router.navigate(['edit'], { relativeTo: this.route });
	}

	onDeleteItem() {
		this.itemService.deleteBookmark(this.id);
		this.router.navigate(['/items']);
	}
}
