import { Tag } from '../../../tags/tag/tag.model';

export class Item {
    id: number
    name: string
    description: string
    tags: Tag[]
    constructor(id: number, name: string, description: string, tags: Tag[]) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.tags = tags;
    }
}