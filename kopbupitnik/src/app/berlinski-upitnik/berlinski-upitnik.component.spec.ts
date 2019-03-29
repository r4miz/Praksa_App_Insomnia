import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BerlinskiUpitnikComponent } from './berlinski-upitnik.component';

describe('BerlinskiUpitnikComponent', () => {
  let component: BerlinskiUpitnikComponent;
  let fixture: ComponentFixture<BerlinskiUpitnikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BerlinskiUpitnikComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BerlinskiUpitnikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
