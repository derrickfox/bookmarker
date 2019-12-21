import { Component, OnInit } from '@angular/core';
import {ModuleRegistry, GridApi} from '@ag-grid-community/core';
import *  as  data from './usStates.json';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	title = 'peoplePower';
	jsonData = data['default'];
	columnDefs = [
		{ headerName: 'State', field: 'state' },
		{ headerName: 'Population', field: 'population' }
	];
	rowData = [];

	ngOnInit() {
		console.log(this.jsonData);
		for (let row of this.jsonData) {
			const state = row.NAME;
			const population = row.POPESTIMATE2018;
			let stateObject = {
				'state': state,
				'population': population
			};
			this.rowData.push(stateObject);
		}
	}

	onGridReady(params: GridApi) {
		// params.api.sizeColumnsToFit();
	 }

	onStateClick(element: HTMLElement) {
		console.log('element', element);
	}
}
