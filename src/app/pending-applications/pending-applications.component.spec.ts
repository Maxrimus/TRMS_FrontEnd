import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingApplicationsComponent } from './pending-applications.component';

describe('PendingApplicationsComponent', () => {
  let component: PendingApplicationsComponent;
  let fixture: ComponentFixture<PendingApplicationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingApplicationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
