import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BencoLoginComponent } from './benco-login.component';

describe('BencoLoginComponent', () => {
  let component: BencoLoginComponent;
  let fixture: ComponentFixture<BencoLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BencoLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BencoLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
