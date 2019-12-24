import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms"; 
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TagFilterComponent } from './tag-filter/tag-filter.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './list/item/item.component';
import { SelectedTagsComponent } from './selected-tags/selected-tags.component';

@NgModule({
  declarations: [
    AppComponent,
    TagFilterComponent,
    ListComponent,
    ItemComponent,
    SelectedTagsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    HttpClientModule,
    AgGridModule.withComponents([])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
