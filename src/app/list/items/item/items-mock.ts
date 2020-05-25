import { Item } from '../item/item.model';
import { tags } from '../../../tags/tags-mock';

export const items = [
    new Item(1, 'Test', 'Desc', [tags[0], tags[1]], 'wwww.espn.com'),
    new Item(2, 'Second', 'Two Desc', [tags[2], tags[3]], 'www.yahoo.com')
]