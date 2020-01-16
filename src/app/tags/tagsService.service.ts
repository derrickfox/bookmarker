import { Injectable } from "@angular/core";
import { Tag } from './tag/tag.model';
import { Item } from '../list/items/item/item.model'
import { ItemService } from '../list/items/item/item.service';
import { Subject, Subscription } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TagsService {
    tagsChanged = new Subject<Tag[]>()
    selectedTags: Tag[] = []
    selectedTagsChanged = new Subject<Tag[]>()
    tags: Tag[] = []
    searchTermChanged = new Subject<string>()
    searchTerm: string
    itemSubscription: Subscription
    items: Item[]

    constructor(private itemService: ItemService) {
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
        return this.tags.slice();
    }

    addSelectedTag(tag: Tag) {
        this.selectedTags.push(tag);
        this.selectedTagsChanged.next(this.selectedTags);
        console.log('tagsService -> addSelectedTag(tag) -> this.selected', this.selectedTags);
    }

    getSelectedTags() {
        this.selectedTagsChanged.next(this.selectedTags.slice());
        return this.selectedTags.slice();
    }

    getSearchTerm() {
        return this.searchTermChanged.next(this.searchTerm);
    }

    deleteTag(id: number) {
        this.selectedTags.splice(id, 1);
        // this.selectedTagsChanged.next(this.selectedTags.slice());
    }

}