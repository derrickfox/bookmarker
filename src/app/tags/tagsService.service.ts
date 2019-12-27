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
        },
        {
            name: 'Dog 1'
        },
        {
            name: 'Dog 2'
        },
        {
            name: 'Dog 3'
        },
        {
            name: 'Dog 4'
        },
        {
            name: 'Cat 1'
        },
        {
            name: 'Cat 2'
        }
    ]

    getTags() {
        return this.tags
    }
}