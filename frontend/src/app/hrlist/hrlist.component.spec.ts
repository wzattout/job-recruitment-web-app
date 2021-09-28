import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HRListComponent } from './hrlist.component';

describe('HRListComponent', () => {
  let component: HRListComponent;
  let fixture: ComponentFixture<HRListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HRListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HRListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
