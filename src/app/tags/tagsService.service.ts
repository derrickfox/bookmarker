import { Injectable } from "@angular/core";
import { Tag } from './tag/tag.model';

@Injectable({providedIn: 'root'})
export class TagsService {
    tags: Tag[] = [
        {
            name: 'A Tag 1'
        },
        {
            name: 'The Tag 2'
        },
        {
            name: 'Be Tag 3'
        },
        {
            name: 'Be Dog 1'
        },
        {
            name: 'As Dog 2'
        },
        {
            name: 'Next Dog 3'
        },
        {
            name: 'The Dog 4'
        },
        {
            name: 'A Cat 1'
        },
        {
            name: 'Be Cat 2'
        }
    ]

    getTags() {
        return this.tags
    }
}