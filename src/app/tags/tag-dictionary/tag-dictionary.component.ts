import { Component, OnInit } from '@angular/core';
import { tags } from '../tags-mock';

@Component({
  selector: 'app-tag-dictionary',
  templateUrl: './tag-dictionary.component.html',
  styleUrls: ['./tag-dictionary.component.css']
})
export class TagDictionaryComponent implements OnInit {

  public tags = tags;

  constructor() { }

  ngOnInit() {
    // console.log('tags', this.tags);
  }

}
