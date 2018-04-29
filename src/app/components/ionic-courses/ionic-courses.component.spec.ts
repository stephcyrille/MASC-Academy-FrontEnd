import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IonicCoursesComponent } from './ionic-courses.component';

describe('IonicCoursesComponent', () => {
  let component: IonicCoursesComponent;
  let fixture: ComponentFixture<IonicCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonicCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IonicCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
