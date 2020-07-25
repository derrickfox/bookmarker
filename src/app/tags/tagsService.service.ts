import { Injectable } from "@angular/core";
import { Tag } from './tag/tag.model';
import { Item } from '../list/items/item/item.model'
import { ItemService } from '../list/items/item/item.service';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TagsService {
    public tagsChanged = new Subject<Tag[]>()
    public selectedTagsChanged = new Subject<Set<Tag>>()
    public searchTermChanged = new Subject<string>()
    public newTag = new Subject<Tag>();
    public selectedTags: Set<Tag>;
    public tags: Tag[] = []
    public items: Item[]
    public searchTerm: string;

    constructor(private itemService: ItemService) {
        this.setAllTags();
        this.selectedTags = new Set();
    }

    public setAllTags(): void {
        let items = this.itemService.getItems();
        items.map(item => {
            item.tags.map(tag => {
                if (tag !== null || tag !== undefined) {
                    this.tags.push(tag);
                }
            })
        })
    }

    public getAllTags(): Tag[] {
        this.tagsChanged.next(this.tags.slice());
        return this.tags.slice();
    }

    public addSelectedTag(tag: Tag): void {
        console.log('addSelectedTag')
        this.selectedTags.add(tag);
        this.newTag.next(tag);
        this.selectedTagsChanged.next(this.selectedTags);
    }

    public getSelectedTags(): Set<Tag> {
        this.selectedTagsChanged.next(this.selectedTags);
        return this.selectedTags;
    }

    public getSearchTerm(): void {
        return this.searchTermChanged.next(this.searchTerm);
    }

    public deleteTag(tag: Tag): void {
        console.log('deleteTag')
        this.selectedTags.delete(tag);
        this.selectedTagsChanged.next(this.selectedTags);
        this.newTag.next(tag);
    }

}