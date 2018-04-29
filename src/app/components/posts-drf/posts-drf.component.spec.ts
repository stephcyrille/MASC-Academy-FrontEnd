import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsDrfComponent } from './posts-drf.component';

describe('PostsDrfComponent', () => {
  let component: PostsDrfComponent;
  let fixture: ComponentFixture<PostsDrfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsDrfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsDrfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
