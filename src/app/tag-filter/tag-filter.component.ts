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
	filteredTags: Tag[]
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
		let rey = reggy.exec(this.tags[0].name)
		// console.log('rey', rey);

		if(rey) {
			if (rey.length > 0) {
				if (rey.index !== null && rey[0] !== "") {
					console.log('rey', rey);
				}
			}
		}
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}
}
