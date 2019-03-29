import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabletSimptomiComponent } from './tablet-simptomi.component';

describe('TabletSimptomiComponent', () => {
  let component: TabletSimptomiComponent;
  let fixture: ComponentFixture<TabletSimptomiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabletSimptomiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabletSimptomiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
