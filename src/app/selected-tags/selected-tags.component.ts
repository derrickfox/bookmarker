import { Component, OnInit } from '@angular/core';
import { TagsService } from '../tags/tagsService.service';
import { Tag } from '../tags/tag/tag.model';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-selected-tags',
  templateUrl: './selected-tags.component.html',
  styleUrls: ['./selected-tags.component.css']
})
export class SelectedTagsComponent implements OnInit {
  selectedTags = new Subject<Tag[]>()
  constructor(private tagsService: TagsService) { }

  ngOnInit() {
    this.selectedTags.subscribe(tag => {
      console.log('tag', tag);
    })
  }

}
