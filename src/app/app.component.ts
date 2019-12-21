import { Component, OnInit } from '@angular/core';
import {ModuleRegistry, GridApi} from '@ag-grid-community/core';
import { AllCommunityModules, Module } from "@ag-grid-community/all-modules";
import "@ag-grid-community/all-modules/dist/styles/ag-grid.css";
import "@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css";
import { HttpClient } from "@angular/common/http";
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

	private gridApi;
	private gridColumnApi;
	public modules: Module[] = AllCommunityModules;

	constructor(private http: HttpClient) {}

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

	onGridReady(params) {
		this.gridApi = params.api;
		this.gridColumnApi = params.columnApi;
	
		this.http
		  .get(
			"https://raw.githubusercontent.com/ag-grid/ag-grid/master/packages/ag-grid-docs/src/olympicWinnersSmall.json"
		  )
		  .subscribe(data => {
			// this.rowData = data;
			console.log('from server data: ', data);
		  });
	  }

	onStateClick(element: HTMLElement) {
		console.log('element', element);
	}
}
