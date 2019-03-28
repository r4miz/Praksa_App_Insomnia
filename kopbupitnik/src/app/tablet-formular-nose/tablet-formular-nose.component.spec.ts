import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabletFormularNoseComponent } from './tablet-formular-nose.component';

describe('TabletFormularNoseComponent', () => {
  let component: TabletFormularNoseComponent;
  let fixture: ComponentFixture<TabletFormularNoseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabletFormularNoseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabletFormularNoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
