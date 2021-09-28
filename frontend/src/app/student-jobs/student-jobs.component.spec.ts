import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentJobsComponent } from './student-jobs.component';

describe('StudentJobsComponent', () => {
  let component: StudentJobsComponent;
  let fixture: ComponentFixture<StudentJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentJobsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
