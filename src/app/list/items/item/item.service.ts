import { Injectable } from "@angular/core";
import { Item } from './item.model';
import { Tag } from '../../../tags/tag/tag.model';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ItemService {
    searchTermSubject = new Subject<string>();
    searchTerm: string;
    itemsChanged = new Subject<Item[]>();
    testItems: Item[] = [
        new Item(0, 'Zeroth Item', 'A zero is round.', [new Tag('Stuff'), new Tag('Other Stuff')], 'www.google.com'),
        new Item(1, 'First Item', 'First is the worst.', [new Tag('A Cat'), new Tag('Duper')], 'www.jira.com'),
        new Item(2, 'Second Item', 'Second is the best', [new Tag('Two'), new Tag(' More Two')], 'www.yahoo.com')
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
    
    setSearchTerm(term: string) {
        this.searchTerm = term;
        this.searchTermSubject.next(this.searchTerm);
    }
}