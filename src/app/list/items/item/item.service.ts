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
        new Item(0, 'Zeroth Item', 'A zero is round.', [new Tag('Zero'), new Tag('Cat')], 'www.google.com'),
        new Item(1, 'First Item', 'First is the worst.', [new Tag('First'), new Tag('Dog')], 'www.jira.com'),
        new Item(2, 'Second Item', 'Second is the best', [new Tag('Second'), new Tag('Horse')], 'www.yahoo.com'),
        new Item(3, 'Third Item', 'Three stuff.', [new Tag('Third'), new Tag('Cat')], 'www.google.com'),
        new Item(4, 'Forth Item', 'Fourth stuf.', [new Tag('Forth'), new Tag('Dog')], 'www.jira.com'),
        new Item(5, 'Fifth Item', 'Fifth stuffsfa', [new Tag('Fifth'), new Tag('Horse')], 'www.yahoo.com'),
        new Item(6, 'Sixth Item', 'Sixth fjadlf.', [new Tag('Sixth'), new Tag('Cat')], 'www.google.com'),
        new Item(7, 'Seventh Item', 'Seventh aflda.', [new Tag('Seventh'), new Tag('Dog')], 'www.jira.com'),
        new Item(8, 'Eigth Item', 'Not sure how to spell 8th', [new Tag('Eigth'), new Tag('Horse')], 'www.yahoo.com')
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

    deleteBookmark(id: number) {
        this.testItems = this.testItems.splice(id, 1);
        return this.testItems.slice();
    }
    
    setSearchTerm(term: string) {
        this.searchTerm = term;
        this.searchTermSubject.next(this.searchTerm);
    }
}