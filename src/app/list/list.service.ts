import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';
import { Tag } from '../tags/tag/tag.model';
import { Item } from '../list/items/item/item.model';
import { ItemService } from '../list/items/item/item.service';

@Injectable({providedIn: 'root'})
export class ListService {
    emitTags = new Subject<Tag>()
    searchTerm: string = ''

    constructor(private itemService: ItemService) {

    }

    getSearchTerm() {
        return this.searchTerm;
    }

    setSearchTerm(newTerm: string) {
        this.searchTerm = newTerm;
    }

}