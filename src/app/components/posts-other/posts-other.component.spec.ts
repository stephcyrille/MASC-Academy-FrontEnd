import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsOtherComponent } from './posts-other.component';

describe('PostsOtherComponent', () => {
  let component: PostsOtherComponent;
  let fixture: ComponentFixture<PostsOtherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsOtherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
