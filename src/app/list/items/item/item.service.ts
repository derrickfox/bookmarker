import { Injectable, OnInit } from "@angular/core";
import { Item } from './item.model';
import { Tag } from '../../../tags/tag/tag.model';
import { Subject } from 'rxjs';
import { items } from '../item/items-mock';

@Injectable({ providedIn: 'root' })
export class ItemService {
    searchTermSubject = new Subject<string>();
    searchTerm: string;
    itemsChanged = new Subject<Item[]>();
    selectedItem: Item;
    selectedItemChanged = new Subject<Item>();
    testItems: Item[] = items;
    // testItems: Item[] = [
    //     new Item(9, 'Iroquois History', 'A documentary of Iroquios government structure.', [new Tag(''), new Tag(''), new Tag('')], 'https://www.youtube.com/watch?v=S4gU2Tsv6hY&ab_channel=HistoriaCivilis'),
    //     new Item(10, 'AI Driving', 'Teaching AI how to drive a virtual car.', [new Tag(''), new Tag('')], 'https://www.youtube.com/watch?v=r428O_CMcpI&ab_channel=CodeBullet'),
    //     new Item(11, 'Loop Quantum Gravity', 'Loop Quantum Gravity Reveals What Came Before the Big Bang.', [new Tag(''), new Tag('')], 'https://www.youtube.com/watch?v=dpmx8D5CXRA'),
    //     new Item(12, 'Hinduism', 'What is Hinduism?', [new Tag(''), new Tag('')], 'https://www.youtube.com/watch?v=xlBEEuYIWwY'),
    //     new Item(13, 'Buddhism', 'What is Buddhism?', [new Tag(''), new Tag('Religion')], 'https://www.youtube.com/watch?v=ZTI3P9zx-oY'),
    //     new Item(14, 'Jainism', 'What is Jainism?', [new Tag(''), new Tag('Religion')], 'https://www.youtube.com/watch?v=KkwmYlgkOhU'),
    //     new Item(15, 'Christianity', 'What is Christianity?', [new Tag(''), new Tag('Religion')], 'https://www.youtube.com/watch?v=Ut-UOhY0s8E'),
    //     new Item(16, 'Islam', 'What is Islam?', [new Tag(''), new Tag('Religion')], 'https://www.youtube.com/watch?v=TpcbfxtdoI8'),
    //     new Item(17, 'Judaism', 'What is Judaism?', [new Tag(''), new Tag('Religion')], 'https://www.youtube.com/watch?v=PWsKZ2Xto4Y'),
    //     new Item(18, 'American Court System', 'The American Court System Explained', [new Tag(''), new Tag('Government')], 'https://www.youtube.com/watch?v=gTuh5m_23SU&ab_channel=Mr.Beat'),
    //     new Item(19, 'Presidential Cabinet', "The American President's Cabinet Explained", [new Tag(''), new Tag('Government')], 'https://www.youtube.com/watch?v=r428O_CMcpI&ab_channel=CodeBullet'),
    //     new Item(20, 'Quantum Chromodynamics', 'Quarks, Gluon flux tubes, Strong Nuclear Force, & Quantum Chromodynamics', [new Tag(''), new Tag('')], 'https://www.youtube.com/watch?v=FoR3hq5b5yE'),
    //     new Item(21, '10 Dimensions', '10 Dimensions of Reality and What They Mean for You', [new Tag(''), new Tag('Physics')], 'https://www.youtube.com/watch?v=R2P6wfJo4UM&ab_channel=TopTenz'),
    //     new Item(22, 'Egyptian Mythology', 'Egyptian Mythology: The Essential', [new Tag(''), new Tag(''), new Tag(''), new Tag('History')], 'https://www.youtube.com/watch?v=uZe49S1Q8b8&ab_channel=SeeUinHistory%2FMythology')
    // ]

    public addItem(item: Item) {
        this.testItems.push(item);
        this.itemsChanged.next(this.testItems.slice());
    }

    public getItems() {
        return this.testItems.slice();
    }

    public getItem(id: number) {
        let thisItem: Item;
        this.testItems.map(item => {
            if (item.id === id) {
                this.selectedItem = item;
            }
        })
        // return this.testItems[id];

        this.selectedItemChanged.next(this.selectedItem)
        return this.selectedItem;
    }

    public updateItem(id: number, newItem: Item) {
        this.testItems[id] = newItem;
        this.itemsChanged.next(this.testItems.slice());
    }

    public deleteBookmark(id: number) {
        this.testItems = this.testItems.splice(id, 1);
        return this.testItems.slice();
    }
    
    public setSearchTerm(term: string) {
        this.searchTerm = term;
        this.searchTermSubject.next(this.searchTerm);
    }
}