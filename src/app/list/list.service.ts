import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';
import { Tag } from '../tags/tag/tag.model';
import { Item } from '../list/items/item/item.model';
import { ItemService } from '../list/items/item/item.service';

@Injectable({providedIn: 'root'})
export class ListService {
    searchTerm: string = ''
    selectedItems: Item[];
    selectedTags: Tag[];
    allItems: Item[]
    
    constructor(private itemService: ItemService) {


    }

    filterTags(tags: Tag[]) {
        if(tags !== undefined){
            tags.map(tag => {
                this.allItems.map(item => {
                    item.tags.map(itemTag => {
                        if (tag.name === itemTag.name && this.selectedItems !== undefined) {
                            if (!this.selectedItems.includes(item)) {
                                this.selectedItems.push(item);
                                this.itemService.itemsChanged.next(this.selectedItems.slice());
                            }
                        }
                    })
                })
            })
        }

    }
    
    getAllItems() {
        return this.allItems.slice();
    }

    getSearchTerm() {
        return this.searchTerm;
    }

    setSearchTerm(newTerm: string) {
        this.searchTerm = newTerm;
    }

}