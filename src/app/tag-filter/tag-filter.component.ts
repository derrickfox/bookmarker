import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Tag } from '../tags/tag/tag.model';
import { TagsService } from '../tags/tagsService.service';
import { FormGroup } from '@angular/forms';
import { Subject, Subscription } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';

@Component({
	selector: 'app-tag-filter',
	templateUrl: './tag-filter.component.html',
	styleUrls: ['./tag-filter.component.css']
})
export class TagFilterComponent implements OnInit {
	tags: Tag[]
	subscription: Subscription
	searchTerm: string
	constructor(private tagsService: TagsService) { }

	ngOnInit() {
		this.subscription = this.tagsService.tagsChanged.subscribe(tags => {
			this.tags = tags
		});
		this.tagsService.getTags();
	}

	onKeyUp(searchTerm: string) {
		let reggy = new RegExp(searchTerm);
		let reggyArray = reggy.exec('Some stupid shit');
		console.log('reggyArray', reggyArray);
		// let tagObject = new Tag(stuff);
		// this.tags.push(tagObject);
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}
}
