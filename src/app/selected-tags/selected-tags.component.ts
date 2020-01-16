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
		console.log('selected-tags oninit')

		this.tagSubscription = this.tagsService.selectedTagsChanged.subscribe(tags => {
			this.selectedTags = tags;
			console.log('selected-tags onInit -> selectedTagsChanged')
			// tags.map(tag => {
			// 	this.listService.emitTags.next(tag);
			// })
		})
	}

	onTagSelected() {
		
	}

	onDelete(id: number) {
		console.log('selected-tags -> onDelete(id) -> id', id);
		this.tagsService.deleteTag(id);
		this.tagSubscription = this.tagsService.selectedTagsChanged.subscribe(tags => {
			this.selectedTags = tags;
			tags.map(tag => {
				// this.listService.emitTags.next(tag);
			})
		})
	}

	ngOnDestroy() {
		this.tagSubscription.unsubscribe();
	}
}
