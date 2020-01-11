import { Component, OnInit } from '@angular/core';
import { TagsService } from '../tags/tagsService.service';
import { Tag } from '../tags/tag/tag.model';
import { ListService } from '../list/list.service';
@Component({
	selector: 'app-selected-tags',
	templateUrl: './selected-tags.component.html',
	styleUrls: ['./selected-tags.component.css']
})
export class SelectedTagsComponent implements OnInit {
	selectedTags: Tag[]

	constructor(private tagsService: TagsService, private listService: ListService) { }

	ngOnInit() {
		this.tagsService.selectedTagsChanged.subscribe(tags => {
			this.selectedTags = tags;
			tags.map(tag => {
				this.listService.emitTags.next(tag);
			})
		})
	}
}
