import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddJobComponent } from './admin-add-job.component';

describe('AdminAddJobComponent', () => {
  let component: AdminAddJobComponent;
  let fixture: ComponentFixture<AdminAddJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddJobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
