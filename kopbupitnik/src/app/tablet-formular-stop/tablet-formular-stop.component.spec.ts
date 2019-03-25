import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabletFormularStopComponent } from './tablet-formular-stop.component';

describe('TabletFormularStopComponent', () => {
  let component: TabletFormularStopComponent;
  let fixture: ComponentFixture<TabletFormularStopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabletFormularStopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabletFormularStopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
