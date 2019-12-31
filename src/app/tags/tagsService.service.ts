import { Injectable } from "@angular/core";
import { Tag } from './tag/tag.model';
import { ItemService } from '../list/items/item/item.service';
import { Subject } from 'rxjs';
import { ListService } from '../list/list.service';

@Injectable({ providedIn: 'root' })
export class TagsService {
    tagsChanged = new Subject<Tag[]>()
    selectedTags: Tag[] = []
    selectedTagsChanged = new Subject<Tag[]>()
    tags: Tag[] = []
    searchTermChanged = new Subject<string>()
    searchTerm: string

    constructor(private itemService: ItemService, private listsService: ListService) {
        this.setAllTags();
    }

    setAllTags() {
        let items = this.itemService.getItems();
        items.map(item => {
            item.tags.map(tag => {
                if (tag !== null || tag !== undefined) {
                    this.tags.push(tag);
                }
            })
        })
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

    getSearchTerm() {
        return this.searchTermChanged.next(this.searchTerm);
    }

}