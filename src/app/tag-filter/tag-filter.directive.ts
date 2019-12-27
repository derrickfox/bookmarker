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
//   transform(value: number, exponent?: number): number {
//     return Math.pow(value, isNaN(exponent) ? 1 : exponent);
//   }

    searchTerm: string

    transform(tags: Tag[]): Tag[] {
        console.log('tags', tags);
        let filterString = 'Filtered!';
        for (let tag of tags) {
            tag.name = tag.name + filterString;
        }
        return tags;
    }
}