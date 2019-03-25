import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularNoseComponent } from './formular-nose.component';

describe('FormularNoseComponent', () => {
  let component: FormularNoseComponent;
  let fixture: ComponentFixture<FormularNoseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularNoseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularNoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
