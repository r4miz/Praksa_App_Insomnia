import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryOfDiseasesRelatedToSleepComponent } from './history-of-diseases-related-to-sleep.component';

describe('HistoryOfDiseasesRelatedToSleepComponent', () => {
  let component: HistoryOfDiseasesRelatedToSleepComponent;
  let fixture: ComponentFixture<HistoryOfDiseasesRelatedToSleepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryOfDiseasesRelatedToSleepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryOfDiseasesRelatedToSleepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
