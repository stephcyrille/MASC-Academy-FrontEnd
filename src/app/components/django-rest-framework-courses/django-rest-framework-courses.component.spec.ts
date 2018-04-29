import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DjangoRestFrameworkCoursesComponent } from './django-rest-framework-courses.component';

describe('DjangoRestFrameworkCoursesComponent', () => {
  let component: DjangoRestFrameworkCoursesComponent;
  let fixture: ComponentFixture<DjangoRestFrameworkCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DjangoRestFrameworkCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DjangoRestFrameworkCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
