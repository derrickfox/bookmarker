import { Component, OnInit, OnDestroy } from '@angular/core';
import { Tag } from '../tags/tag/tag.model';
import { TagsService } from '../tags/tagsService.service';
import { Subject } from 'rxjs';

@Component({
	selector: 'app-tag-filter',
	templateUrl: './tag-filter.component.html',
	styleUrls: ['./tag-filter.component.css']
})
export class TagFilterComponent implements OnInit, OnDestroy {
	selectedTagsChanged = new Subject<Tag[]>()
	searchTermSub = new Subject<string>()
	tags: Tag[]
	filteredTags: Tag[] = []
	searchTerm: string

	constructor(private tagsService: TagsService) { }

	ngOnInit() {
		this.tagsService.tagsChanged.subscribe(tags => {
			this.tags = tags
		});
		this.tagsService.getAllTags();
		this.filteredTags = this.tags;
	}

	onKeyUp(searchTerm: string) {
		this.filteredTags = [];
		let reggy = new RegExp(searchTerm);
		let rey = reggy.exec(this.tags[0].name);
		this.tags.map(tag => {
			let tagReg = new RegExp(searchTerm);
			let tagAfterReg = tagReg.exec(tag.name);
			if (tagAfterReg) {
				if (tagAfterReg[0] !== "") {
					this.filteredTags.push(tag);
				}
			}
		})
	}

	clicked(tag: Tag) {
		this.tagsService.addSelectedTag(tag);
	}

	ngOnDestroy() {
	}
}
