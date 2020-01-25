import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { ItemService } from '../item.service';
import { Item } from '../item.model';
import { Tag } from '../../../../tags/tag/tag.model';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css']
})

export class ItemEditComponent implements OnInit {
	id: number;
	name: string;
	description: string;
	editMode: boolean = false;
	itemForm: FormGroup;
	tags: Tag[];
	url: string;

	constructor(private route: ActivatedRoute, private itemService: ItemService, private router: Router) { }

	ngOnInit() {
		this.route.params.subscribe(
			(params: Params) => {
				// The + sign casts the string into a number.
				this.id = +params['id'];
				this.editMode = params['id'] != null;
				this.initForm();
			}
		)
	}

	onSubmit() {
		const newItem = new Item(
			this.itemForm.value['id'],
			this.itemForm.value['name'],
			this.itemForm.value['description'],
			this.itemForm.value['tags'],
			this.itemForm.value['url']);
		if (this.editMode) {
			this.itemService.updateItem(this.id, newItem);
		} else {
			this.itemService.addItem(newItem);
		}
		this.onCancel();
	}

	onCancel() {
		this.router.navigate(['../'], { relativeTo: this.route });
	}

	private initForm() {
		let itemId = 0;
		let itemName = '';
		let itemDescription = '';
		let itemUrl = '';
		if (this.editMode) {
			const item = this.itemService.getItem(this.id);
			itemId = this.id;
			itemName = item.name;
			itemDescription = item.description;
			itemUrl = item.url;
		}
		this.itemForm = new FormGroup({
			'id': new FormControl(itemId),
			'name': new FormControl(itemName, Validators.required),
			'description': new FormControl(itemDescription, Validators.required),
			'url': new FormControl(itemUrl)
		});
	}
}

