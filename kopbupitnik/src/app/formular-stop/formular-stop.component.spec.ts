import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularStopComponent } from './formular-stop.component';

describe('FormularStopComponent', () => {
  let component: FormularStopComponent;
  let fixture: ComponentFixture<FormularStopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularStopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularStopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
