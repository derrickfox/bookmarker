import { Component, OnInit, OnDestroy } from '@angular/core';
import { Tag } from '../tag/tag.model';
import { TagsService } from '../tagsService.service';
import { Subscription } from 'rxjs';
@Component({
	selector: 'app-tags',
	templateUrl: './tags.component.html',
	styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit, OnDestroy {
	tags: Tag[]
	tagSubscription: Subscription

	constructor(private tagsService: TagsService) { }

	ngOnInit() {
		this.tagSubscription = this.tagsService.tagsChanged.subscribe(x => {
			this.tags = x;
		})
	}

	ngOnDestroy() {
		this.tagSubscription.unsubscribe();
	}

}
