import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';
import { Tag } from '../tags/tag/tag.model';
import { Item } from '../list/items/item/item.model';
import { ItemService } from '../list/items/item/item.service';
import { TagsService } from '../tags/tagsService.service';

@Injectable({providedIn: 'root'})
export class ListService {
    searchTerm: string = ''
    tagsChanged = new Subject<Tag[]>()
    selectedItems: Item[];
    allItems: Item[]
    
    constructor(private itemService: ItemService, private tagsService: TagsService) {

    }

    filterTags(tags: Tag[]) {
        this.allItems = this.itemService.getItems();
        // this.filteredItems = []
        console.log('this.allItems', this.allItems)
		tags.map(tag => {
			this.allItems.map(item => {
				item.tags.map(itemTag => {
					if (tag.name === itemTag.name) {
						if (!this.selectedItems.includes(item)) {
							this.selectedItems.push(item);
							this.itemService.itemsChanged.next(this.selectedItems);
							console.log('this.selectedItems', this.selectedItems);
						}
					}
				})
			})
		})
	}

    getSearchTerm() {
        return this.searchTerm;
    }

    setSearchTerm(newTerm: string) {
        this.searchTerm = newTerm;
    }

}