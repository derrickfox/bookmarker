import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';
import { Tag } from '../tags/tag/tag.model';
import { Item } from '../list/items/item/item.model';
import { items } from '../list/items/item/items-mock';

@Injectable({ providedIn: 'root' })

export class ListService {
    public searchTerm: string = ''
    public selectedItems: Item[];
    public selectedTags: Tag[];
    public allItems: Item[] = items;

    public setAllItems(items: Item[]): void {
        this.allItems = items;
    }

    public setNewListItem(item: Item): void {
        this.allItems.push(item);
    }

    public getAllItems(): Item[] {
        return this.allItems.slice();
    }

    public getSearchTerm(): string {
        return this.searchTerm;
    }

    public setSearchTerm(newTerm: string): void {
        this.searchTerm = newTerm;
    }

}