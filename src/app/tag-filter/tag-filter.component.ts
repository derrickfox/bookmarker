import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Tag } from '../tags/tag/tag.model';
import { TagsService } from '../tags/tagsService.service';
import { FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
	selector: 'app-tag-filter',
	templateUrl: './tag-filter.component.html',
	styleUrls: ['./tag-filter.component.css']
})
export class TagFilterComponent implements OnInit {

	testTags: Tag[]
	form: FormGroup
	searchTerm: string
	constructor(private tagsService: TagsService) { }

	ngOnInit() {
		this.testTags = this.tagsService.getTags();
	}

}
