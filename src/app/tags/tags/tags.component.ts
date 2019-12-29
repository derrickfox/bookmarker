import { Component, OnInit } from '@angular/core';
import { Tag } from '../tag/tag.model';
import { TagsService } from '../tagsService.service';
@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  tags: Tag[]
  constructor(private tagsService: TagsService) { }

  ngOnInit() {
    this.tagsService.tagsChanged.subscribe(x => {
      this.tags = x;
    })
  }

}
