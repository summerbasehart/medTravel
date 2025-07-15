import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntlPrescriptionsComponent } from './intl-prescriptions.component';

describe('IntlPrescriptionsComponent', () => {
  let component: IntlPrescriptionsComponent;
  let fixture: ComponentFixture<IntlPrescriptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntlPrescriptionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IntlPrescriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
