import { Injectable } from "@angular/core";
import { Item } from './item.model';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ItemService {
    itemsChanged = new Subject<Item[]>();
    testItems: Item[] = [
        new Item(0, 'test0', 'zeroth description0'),
        new Item(1, 'test1', 'first description1'),
        new Item(2, 'test2', 'second description2')
    ]

    addItem(item: Item) {
        this.testItems.push(item);
        this.itemsChanged.next(this.testItems.slice());
    }

    getItems() {
        return this.testItems.slice();
    }

    getItem(id: number) {
        return this.testItems[id];
    }

    updateItem(id: number, newItem: Item) {
        this.testItems[id] = newItem;
        this.itemsChanged.next(this.testItems.slice());
    }

    deleteRecipe(id: number) {
        this.testItems = this.testItems.splice(id, 1);
        return this.testItems.slice();
    }
}