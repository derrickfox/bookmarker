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
        new Item(8, 'Eigth Item', 'Not sure how to spell 8th', [new Tag('Eigth'), new Tag('Horse')], 'www.yahoo.com'),
        new Item(9, 'Iroquois History', 'A documentary of Iroquios government structure.', [new Tag('Iroquois'), new Tag('Government'), new Tag('History')], 'https://www.youtube.com/watch?v=S4gU2Tsv6hY&ab_channel=HistoriaCivilis'),
        new Item(10, 'AI Driving', 'Teaching AI how to drive a virtual car.', [new Tag('AI'), new Tag('Cars')], 'https://www.youtube.com/watch?v=r428O_CMcpI&ab_channel=CodeBullet'),
        new Item(11, 'Loop Quantum Gravity', 'Loop Quantum Gravity Reveals What Came Before the Big Bang.', [new Tag('Loop Quantum Gravity'), new Tag('Physics')], 'https://www.youtube.com/watch?v=dpmx8D5CXRA'),
        new Item(12, 'Hinduism', 'What is Hinduism?', [new Tag('Hinduism'), new Tag('Religion')], 'https://www.youtube.com/watch?v=xlBEEuYIWwY'),
        new Item(13, 'Buddhism', 'What is Buddhism?', [new Tag('Buddhism'), new Tag('Religion')], 'https://www.youtube.com/watch?v=ZTI3P9zx-oY'),
        new Item(14, 'Jainism', 'What is Jainism?', [new Tag('Jainism'), new Tag('Religion')], 'https://www.youtube.com/watch?v=KkwmYlgkOhU'),
        new Item(15, 'Christianity', 'What is Christianity?', [new Tag('Christianity'), new Tag('Religion')], 'https://www.youtube.com/watch?v=Ut-UOhY0s8E'),
        new Item(16, 'Islam', 'What is Islam?', [new Tag('Islam'), new Tag('Religion')], 'https://www.youtube.com/watch?v=TpcbfxtdoI8'),
        new Item(17, 'Judaism', 'What is Judaism?', [new Tag('Judaism'), new Tag('Religion')], 'https://www.youtube.com/watch?v=PWsKZ2Xto4Y'),
        new Item(18, 'American Court System', 'The American Court System Explained', [new Tag('Courts'), new Tag('Government')], 'https://www.youtube.com/watch?v=gTuh5m_23SU&ab_channel=Mr.Beat'),
        new Item(19, 'Presidential Cabinet', "The American President's Cabinet Explained", [new Tag('Presidential Cabinet'), new Tag('Government')], 'https://www.youtube.com/watch?v=r428O_CMcpI&ab_channel=CodeBullet'),
        new Item(20, 'Quantum Chromodynamics', 'Quarks, Gluon flux tubes, Strong Nuclear Force, & Quantum Chromodynamics', [new Tag('Quantum Chromodynamics'), new Tag('Physics')], 'https://www.youtube.com/watch?v=FoR3hq5b5yE'),
        new Item(21, '10 Dimensions', '10 Dimensions of Reality and What They Mean for You', [new Tag('Dimensions'), new Tag('Physics')], 'https://www.youtube.com/watch?v=R2P6wfJo4UM&ab_channel=TopTenz'),
        new Item(22, 'Egyptian Mythology', 'Egyptian Mythology: The Essential', [new Tag('Egyptian'), new Tag('Egypt'), new Tag('Mythology'), new Tag('History')], 'https://www.youtube.com/watch?v=uZe49S1Q8b8&ab_channel=SeeUinHistory%2FMythology')

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