import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsAngularComponent } from './posts-angular.component';

describe('PostsAngularComponent', () => {
  let component: PostsAngularComponent;
  let fixture: ComponentFixture<PostsAngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsAngularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
