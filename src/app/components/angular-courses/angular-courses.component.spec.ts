import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularCoursesComponent } from './angular-courses.component';

describe('AngularCoursesComponent', () => {
  let component: AngularCoursesComponent;
  let fixture: ComponentFixture<AngularCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
