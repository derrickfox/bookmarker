import { Tag } from '../../../tags/tag/tag.model';

export class Item {
    public id: number
    public name: string
    public description: string
    public tags: Tag[]
    public url: string
    
    constructor(id: number, name: string, description: string, tags: Tag[], url: string) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.url = url
        this.tags = tags;
    }
}