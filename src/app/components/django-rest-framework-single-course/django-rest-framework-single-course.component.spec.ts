import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DjangoRestFrameworkSingleCourseComponent } from './django-rest-framework-single-course.component';

describe('DjangoRestFrameworkSingleCourseComponent', () => {
  let component: DjangoRestFrameworkSingleCourseComponent;
  let fixture: ComponentFixture<DjangoRestFrameworkSingleCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DjangoRestFrameworkSingleCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DjangoRestFrameworkSingleCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
