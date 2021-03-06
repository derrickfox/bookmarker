import { Component, OnInit, OnDestroy } from '@angular/core';
import { Tag } from '../tags/tag/tag.model';
import { TagsService } from '../tags/tagsService.service';
import { Subject } from 'rxjs';
import { tags } from '../tags/tags-mock';

@Component({
	selector: 'app-tag-filter',
	templateUrl: './tag-filter.component.html',
	styleUrls: ['./tag-filter.component.css']
})
export class TagFilterComponent implements OnInit, OnDestroy {
	selectedTagsChanged = new Subject<Tag[]>()
	searchTermSub = new Subject<string>()
	tags: Tag[] = tags;
	filteredTags: Tag[] = tags;
	searchTerm: string
	startingTag: Tag


	constructor(private tagsService: TagsService) { }

	ngOnInit() {
		this.tagsService.tagsChanged.subscribe(tags => {
			this.tags = tags
			let foundTag: Tag
		});
		// this.tagsService.getAllTags();
		// if (!this.tags){
		// 	// do nothing
		// }else{
		// 	// this.filteredTags = this.checkForDoubleTags(this.tags);
		// 	this.filteredTags = this.tags;
		// 	console.log('filteredTags', this.filteredTags);
		// }
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

	// checkForDoubleTags(tags: Tag[]) {
	// 	let tempSet = new Set<string>();
	// 	let filteredArray: Tag [] = [];
	// 	tags.map(tag => {
	// 		if (tempSet.has(tag.name)){

	// 		}else{
	// 			tempSet.add(tag.name);
	// 		}
	// 	})
	// 	tempSet.forEach(tag => {
	// 		let tempTag = new Tag(index, tag.name);
	// 		filteredArray.push(tempTag);
	// 	})

	// 	return filteredArray
	// }

	clicked(tag: Tag) {
		this.tagsService.addSelectedTag(tag);
	}

	ngOnDestroy() {
	}
}
