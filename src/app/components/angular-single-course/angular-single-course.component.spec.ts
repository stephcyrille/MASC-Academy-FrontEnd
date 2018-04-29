import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularSingleCourseComponent } from './angular-single-course.component';

describe('AngularSingleCourseComponent', () => {
  let component: AngularSingleCourseComponent;
  let fixture: ComponentFixture<AngularSingleCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularSingleCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularSingleCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
