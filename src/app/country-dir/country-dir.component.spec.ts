import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryDirComponent } from './country-dir.component';

describe('CountryDirComponent', () => {
  let component: CountryDirComponent;
  let fixture: ComponentFixture<CountryDirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryDirComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CountryDirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
