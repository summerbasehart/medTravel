import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntlInsComponent } from './intl-ins.component';

describe('IntlInsComponent', () => {
  let component: IntlInsComponent;
  let fixture: ComponentFixture<IntlInsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntlInsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IntlInsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
