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
export class AppComponent {

}
