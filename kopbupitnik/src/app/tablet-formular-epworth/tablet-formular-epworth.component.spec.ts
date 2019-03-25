import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabletFormularEpworthComponent } from './tablet-formular-epworth.component';

describe('TabletFormularEpworthComponent', () => {
  let component: TabletFormularEpworthComponent;
  let fixture: ComponentFixture<TabletFormularEpworthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabletFormularEpworthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabletFormularEpworthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
