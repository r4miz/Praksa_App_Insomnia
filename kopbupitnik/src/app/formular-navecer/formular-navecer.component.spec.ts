import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularNavecerComponent } from './formular-navecer.component';

describe('FormularNavecerComponent', () => {
  let component: FormularNavecerComponent;
  let fixture: ComponentFixture<FormularNavecerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularNavecerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularNavecerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
