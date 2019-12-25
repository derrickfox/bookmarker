import { Injectable } from "@angular/core";
import { Item } from './item.model';

@Injectable({ providedIn: 'root' })
export class ItemService {
    testItems: Item[] = [
        new Item(1, 'test0', 'first description1'),
        new Item(2, 'test1', 'second description2'),
        new Item(3, 'test3', 'third description3')
    ]

    getItems() {
        return this.testItems.slice();
    }

    getItem(id: number) {
        return this.testItems[id];
    }

    deleteRecipe(id: number) {
        this.testItems = this.testItems.splice(id, 1);
        return this.testItems.slice();
    }
}