import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing.module';
import { AgGridModule } from 'ag-grid-angular';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms"; 
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TagFilterComponent } from './tag-filter/tag-filter.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './list/items/item/item.component';
import { SelectedTagsComponent } from './selected-tags/selected-tags.component';
import { ItemEditComponent } from './list/items/item/item-edit/item-edit.component';
import { ItemStartComponent } from './list/items/item/item-start/item-start.component';
import { ItemDetailComponent } from './list/items/item/item-detail/item-detail.component';
import { ItemsComponent } from './list/items/items.component';
import { DropDownDirective } from '../shared/drop-down.directive';
import { TagComponent } from './tags/tag/tag.component';
import { TagsComponent } from './tags/tags/tags.component';
import { FilterTags } from './tag-filter/tag-filter.directive';

@NgModule({
  declarations: [
    AppComponent,
    TagFilterComponent,
    ListComponent,
    ItemComponent,
    SelectedTagsComponent,
    ItemEditComponent,
    ItemStartComponent,
    ItemDetailComponent,
    ItemsComponent,
    DropDownDirective,
    TagComponent,
    TagsComponent,
    FilterTags
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
