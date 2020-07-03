import { Item } from '../item/item.model';
import { tags } from '../../../tags/tags-mock';

export const items = [
    new Item(1, 'Iroquois', 'A Government', [tags[0], tags[1]], 'wwww.espn.com'),
    new Item(2, 'History of AI', 'A Brief History of Artificial Intelligence', [tags[2], tags[3]], 'www.yahoo.com'),
    new Item(3, 'Loop Quantum Gravity', 'Physics Stuff', [tags[5], tags[6]], 'www.yahoo.com'),
    new Item(4, 'Quantum Chromodynamics', 'More Physics Stuff', [tags[17], tags[6]], 'www.yahoo.com'),
    new Item(5, 'Education', 'Learning Stuff', [tags[21], tags[19], tags[5], tags[17], tags[18]], 'www.espn.com'),
    new Item(6, 'Buddhism', 'Buddhism', [tags[9], tags[8]], 'www.Buddhism.com'),
    new Item(7, 'Jainism', 'Jainism', [tags[10], tags[8]], 'www.Jainism.com'),
    new Item(8, 'Christianity', 'Christianity', [tags[8], tags[11]], 'www.Christianity.com'),
    new Item(9, 'Islam', 'Islam', [tags[8], tags[12]], 'www.Islam.com'),
    new Item(10, 'Judaism', 'Judaism', [tags[8], tags[13]], 'www.Judaism.com'),
    new Item(11, 'Religion', 'Religion', [tags[8], tags[9], tags[10], tags[11], tags[12], tags[13], tags[14]], 'www.religion.com'),
    new Item(12, 'Presidential Cabinet', 'Government Civics', [tags[1], tags[15]], 'www.gov.gov'),
    new Item(13, 'Courts', 'Civics', [tags[1], tags[14]], 'www.courts.gov'),
    new Item(14, 'Egypt', 'Egyptian History', [tags[20], tags[2], tags[21]], 'www.egypt.com')
]