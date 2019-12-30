import { Directive, PipeTransform } from '@angular/core';
import { Item } from '../../app/list/items/item/item.model';

@Directive({
	selector: '[appListFilter]'
})
export class ListFilterDirective implements PipeTransform {
	transform(item: any): any {
		return item;
	}
}


