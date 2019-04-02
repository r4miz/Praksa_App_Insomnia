import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularUjutroComponent } from './formular-ujutro.component';

describe('FormularUjutroComponent', () => {
  let component: FormularUjutroComponent;
  let fixture: ComponentFixture<FormularUjutroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularUjutroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularUjutroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
