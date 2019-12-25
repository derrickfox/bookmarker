import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-tag-filter',
	templateUrl: './tag-filter.component.html',
	styleUrls: ['./tag-filter.component.css']
})
export class TagFilterComponent implements OnInit {

	testTags = [
		{ name: 'testTag1' },
		{ name: 'testTag2' },
		{ name: 'testTag3' }
	]

	constructor() { }

	ngOnInit() {

	}

}
