import { Component, OnInit, Input, ViewChild, OnDestroy } from '@angular/core';
import { Tag } from '../tags/tag/tag.model';
import { TagsService } from '../tags/tagsService.service';
import { ItemService } from '../list/items/item/item.service';
import { ListService } from '../list/list.service';
import { Subject, Subscription } from 'rxjs';

@Component({
	selector: 'app-tag-filter',
	templateUrl: './tag-filter.component.html',
	styleUrls: ['./tag-filter.component.css']
})
export class TagFilterComponent implements OnInit, OnDestroy {
	tags: Tag[]
	selectedTagsChanged = new Subject<Tag[]>()
	filteredTags: Tag[] = []
	searchTerm: string
	searchTermSub = new Subject<string>()
	tagSubscription: Subscription;

	constructor(private tagsService: TagsService, private itemsService: ItemService, private listService: ListService) { }

	ngOnInit() {
		this.tagSubscription = this.tagsService.tagsChanged.subscribe(tags => {
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
		// this.selectedTagsChanged.next
		console.log('tag-filter -> clicked(tag) -> tag', tag);
	}

	ngOnDestroy() {
		this.tagSubscription.unsubscribe();
	}
}
