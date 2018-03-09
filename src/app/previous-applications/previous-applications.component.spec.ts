import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousApplicationsComponent } from './previous-applications.component';

describe('PreviousApplicationsComponent', () => {
  let component: PreviousApplicationsComponent;
  let fixture: ComponentFixture<PreviousApplicationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviousApplicationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
