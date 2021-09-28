import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HRFormComponent } from './hrform.component';

describe('HRFormComponent', () => {
  let component: HRFormComponent;
  let fixture: ComponentFixture<HRFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HRFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HRFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
