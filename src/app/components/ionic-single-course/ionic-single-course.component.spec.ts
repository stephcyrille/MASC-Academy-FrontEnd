import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IonicSingleCourseComponent } from './ionic-single-course.component';

describe('IonicSingleCourseComponent', () => {
  let component: IonicSingleCourseComponent;
  let fixture: ComponentFixture<IonicSingleCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonicSingleCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IonicSingleCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
