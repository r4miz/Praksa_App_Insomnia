import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabletPittsburghSleepQualityIndexComponent } from './tablet-pittsburgh-sleep-quality-index.component';

describe('TabletPittsburghSleepQualityIndexComponent', () => {
  let component: TabletPittsburghSleepQualityIndexComponent;
  let fixture: ComponentFixture<TabletPittsburghSleepQualityIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabletPittsburghSleepQualityIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabletPittsburghSleepQualityIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
