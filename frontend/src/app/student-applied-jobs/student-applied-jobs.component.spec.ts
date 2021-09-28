import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAppliedJobsComponent } from './student-applied-jobs.component';

describe('StudentAppliedJobsComponent', () => {
  let component: StudentAppliedJobsComponent;
  let fixture: ComponentFixture<StudentAppliedJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentAppliedJobsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentAppliedJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
