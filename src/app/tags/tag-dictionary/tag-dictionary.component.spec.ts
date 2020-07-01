import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagDictionaryComponent } from './tag-dictionary.component';

describe('TagDictionaryComponent', () => {
  let component: TagDictionaryComponent;
  let fixture: ComponentFixture<TagDictionaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagDictionaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagDictionaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
