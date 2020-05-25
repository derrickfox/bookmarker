import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';
import { Tag } from '../tags/tag/tag.model';
import { Item } from '../list/items/item/item.model';

@Injectable({providedIn: 'root'})
export class ListService {
    searchTerm: string = ''
    selectedItems: Item[];
    selectedTags: Tag[];
    allItems: Item[]
    
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