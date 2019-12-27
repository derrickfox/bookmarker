import { Component, OnInit } from '@angular/core';
import { Tag } from '../tags/tag/tag.model';
import { TagsService } from '../tags/tagsService.service';

@Component({
	selector: 'app-tag-filter',
	templateUrl: './tag-filter.component.html',
	styleUrls: ['./tag-filter.component.css']
})
export class TagFilterComponent implements OnInit {

	testTags: Tag[]

	constructor(private tagsService: TagsService) { }

	ngOnInit() {
		this.testTags = this.tagsService.getTags();
	}

}
