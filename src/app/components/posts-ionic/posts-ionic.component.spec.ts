import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsIonicComponent } from './posts-ionic.component';

describe('PostsIonicComponent', () => {
  let component: PostsIonicComponent;
  let fixture: ComponentFixture<PostsIonicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsIonicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsIonicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
