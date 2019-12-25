import { Injectable } from "@angular/core";
import { Item } from './item.model';

@Injectable({providedIn: 'root'})
export class ItemService {
    testItems: Item[] = [
        new Item(1, 'test1', 'description1'),
        new Item(2, 'second2', 'second description'),
        new Item(3, 'third', '3')
    ]

    getItems() {
        return this.testItems;
    }

    getItem(id: number) {
        return this.testItems[id];
    }
}