import { Injectable } from "@angular/core";
import { Tag } from './tag/tag.model';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class TagsService {
    tagsChanged = new Subject<Tag[]>()
    tags: Tag[] = [
        new Tag('A Cat'),
        new Tag('A Dog'),
        new Tag('A Badger'),
        new Tag('A Zebra'),
        new Tag('The Cat'),
        new Tag('The Dog'),
        new Tag('The Badger'),
        new Tag('The Zebra')
    ]

    getTags() {
        this.tagsChanged.next(this.tags.slice());
    }

}