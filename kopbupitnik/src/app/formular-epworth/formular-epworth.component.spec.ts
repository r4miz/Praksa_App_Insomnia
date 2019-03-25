import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularEpworthComponent } from './formular-epworth.component';

describe('FormularEpworthComponent', () => {
  let component: FormularEpworthComponent;
  let fixture: ComponentFixture<FormularEpworthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularEpworthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularEpworthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
