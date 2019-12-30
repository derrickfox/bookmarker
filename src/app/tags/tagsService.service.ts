import { Injectable } from "@angular/core";
import { Tag } from './tag/tag.model';
import { ItemService } from '../list/items/item/item.service';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class TagsService {
    tagsChanged = new Subject<Tag[]>()
    selectedTags: Tag[] = [ new Tag('test tag')]
    selectedTagsChanged = new Subject<Tag[]>()
    tags: Tag[] = []

    constructor(private itemService: ItemService) {
        this.setAllTags();
    }

    setAllTags() {
        let items = this.itemService.getItems();
        for (let item of items) {
            for (let tag of item.tags) {
                if (tag !== null || tag !== undefined) {
                    this.tags.push(tag);
                    console.log('tag', tag);
                }
            }
        }
    }

    getAllTags() {
        this.tagsChanged.next(this.tags.slice());
    }

    addSelectedTag(tag: Tag) {
        this.selectedTags.push(tag);
        this.selectedTagsChanged.next(this.selectedTags);
        console.log('selected tags ', this.selectedTags);
    }

    getSelectedTags() {
        return this.selectedTagsChanged.next(this.selectedTags);
    }

}