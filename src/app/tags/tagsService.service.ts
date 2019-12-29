import { Injectable } from "@angular/core";
import { Tag } from './tag/tag.model';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class TagsService {
    tagsChanged = new Subject<Tag[]>()
    tags: Tag[] = [
        new Tag('A Cat'),
        new Tag('A Dog'),
        new Tag('The Cat'),
        new Tag('The Dog')
    ]

    getTags() {
        this.tagsChanged.next(this.tags.slice());
    }

}