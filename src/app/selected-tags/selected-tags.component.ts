import { Component, OnInit, OnDestroy } from '@angular/core';
import { TagsService } from '../tags/tagsService.service';
import { Tag } from '../tags/tag/tag.model';
import { ListService } from '../list/list.service';
import { ItemService } from '../list/items/item/item.service';
import { Subscription, Subject } from 'rxjs';
@Component({
	selector: 'app-selected-tags',
	templateUrl: './selected-tags.component.html',
	styleUrls: ['./selected-tags.component.css']
})
export class SelectedTagsComponent implements OnInit, OnDestroy {
	selectedTagsSubject = new Subject<Tag[]>();
	selectedTags: Tag[]
	tagSubscription: Subscription

	constructor(private tagsService: TagsService, private listService: ListService, private itemService: ItemService) { }

	ngOnInit() {
		this.tagSubscription = this.tagsService.selectedTagsChanged.subscribe(tags => {
			this.selectedTags = tags;
		})
	}

	onDelete(id: number) {
		this.tagsService.deleteTag(id);
		this.tagSubscription = this.tagsService.selectedTagsChanged.subscribe(tags => {
			console.log('tags', tags);
			this.selectedTags = tags;
		})
	}

	ngOnDestroy() {
		this.tagSubscription.unsubscribe();
	}
}
