import { Injectable } from "@angular/core";
import { Tag } from './tag/tag.model';

@Injectable({providedIn: 'root'})
export class TagsService {
    tags: Tag[] = [
        {
            name: 'Tag 1'
        },
        {
            name: 'Tag 2'
        },
        {
            name: 'Tag 3'
        }
    ]

    getTags() {
        return this.tags
    }
}