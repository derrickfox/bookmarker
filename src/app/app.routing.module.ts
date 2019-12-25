import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemsComponent } from '../app/list/items/items.component';
import { ItemStartComponent } from '../app/list/item/item-start/item-start.component';
import { ItemDetailComponent } from '../app/list/item/item-detail/item-detail.component';
import { ItemEditComponent } from '../app/list/item/item-edit/item-edit.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/items', pathMatch: 'full' },
    {
        path: 'items', component: ItemsComponent, children: [
            { path: '', component: ItemStartComponent },
            { path: 'new', component: ItemEditComponent },
            { path: ':id', component: ItemDetailComponent },
            { path: ':id/edit', component: ItemEditComponent }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}