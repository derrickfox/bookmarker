import { Pipe, PipeTransform } from '@angular/core';
import { Tag } from '../tags/tag/tag.model';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
@Pipe({name: 'tagFilter'})
export class FilterTags implements PipeTransform {
    searchTerm: string
    re = new RegExp('Dog', 'g');

    transform(tags: Tag[]): Tag[] {
        console.log('tags', tags);
        let filterString = ' Filtered!';
        let newArray = [];
        for (let tag of tags) {
            let temp = this.re.exec(tag.name);
            if (temp !== null) {
                console.log('temp ', temp);
                let tempItem = new Tag(temp.input);
                newArray.push(tempItem);
            }
        }
        
        return newArray;
    }
}