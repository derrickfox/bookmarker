import { Component, OnInit } from '@angular/core';
import { Item } from './item.model';
import { ItemService } from './item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})

export class ItemComponent implements OnInit {
  item: Item

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.item = this.itemService.getItem(0);
    console.log('item 0', this.item);
  }

}
