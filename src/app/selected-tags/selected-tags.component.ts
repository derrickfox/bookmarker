import { Component, OnInit } from '@angular/core';
import { TagsService } from '../tags/tagsService.service';
import { Tag } from '../tags/tag/tag.model';

@Component({
	selector: 'app-selected-tags',
	templateUrl: './selected-tags.component.html',
	styleUrls: ['./selected-tags.component.css']
})
export class SelectedTagsComponent implements OnInit {
	selectedTags: Tag[]

	constructor(private tagsService: TagsService) { }

	ngOnInit() {
		this.tagsService.selectedTagsChanged.subscribe(tags => {
			this.selectedTags = tags;
		})
	}
}
