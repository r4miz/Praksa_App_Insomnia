import { Component, OnInit } from '@angular/core';
import { HistoryOfDiseasesRelatedToSleep } from '../HistoryOfDiseasesRelatedToSleep';

@Component({
  selector: 'app-history-of-diseases-related-to-sleep',
  templateUrl: './history-of-diseases-related-to-sleep.component.html',
  styleUrls: ['./history-of-diseases-related-to-sleep.component.css']
})
export class HistoryOfDiseasesRelatedToSleepComponent implements OnInit {

  /*HoursOfSleepPerNight: number = null;
  TimeNeededToFallAsleep: number = null;
  HaveDriverLicence: boolean = null;
  DriversLicenceCategory: string = null;
  KmPerYear: number = null;
  Smoker: boolean = null;
  QuantityOfAlcoholPerWeek: number = null;
  SleepDuringDay: boolean = null;
  WhenDoYouSleepDuringDay: string = null;
  HowLongDoYouSleepDuringDay: number = null;
  NumberOfNapsPerWeek: number = null;
  Rested: boolean = null;
  TimeOfDay: string = null;
  WakeUpDuringTheNight: boolean = null;
  NumberOfTimes: number = null;
  HardToFallAsleepAgain: boolean = null;
  GetOutOfBed: boolean = null;
  WatchTV: boolean = null;
  WakeUpWithPain: boolean = null;
  HowOften: number = null;
  FamilyIssueWithSleep: boolean = null;
  Kinship: string = null;
  Diagnosis: string = null;
  DiedInSleep: boolean = null;
  Treatment: boolean = null;
  NameOfDisease: string[] = null;
  Meds: string[] = null;
  Dose: number[] = null;*/

  HistoryOfDiseases: HistoryOfDiseasesRelatedToSleep;

  constructor() { }


  ngOnInit() {
    this.HistoryOfDiseases = new HistoryOfDiseasesRelatedToSleep();
  }

  check(ChosenValue: number, DivName: string) {
    if (ChosenValue === 1) {
      document.getElementById(DivName).hidden = false;

    } else if (ChosenValue === 0) {
      document.getElementById(DivName).hidden = true;

    }
  }

  handleChange(e) {
    const items = document.getElementsByTagName('li');
    // Prvo pitanje

    if (this.HistoryOfDiseases.HoursOfSleepPerNight !== null) {
      items[0].setAttribute('style', 'background-color: green;');
    } else {
      items[0].removeAttribute('style');
    }
    // Drugo pitanje

    if (this.HistoryOfDiseases.TimeNeededToFallAsleep !== null) {
      items[1].setAttribute('style', 'background-color: green;');
    } else {
      items[1].removeAttribute('style');
    }

    // Trece pitanje

    if (this.HistoryOfDiseases.HaveDriverLicence != null) {
      if (this.HistoryOfDiseases.HaveDriverLicence == 0) {
        items[2].setAttribute('style', 'background-color: green;');
      } else {
        if (this.HistoryOfDiseases.selectedValueDriversLicenceCategory != null && this.HistoryOfDiseases.KmPerYear !== null) {
          items[2].setAttribute('style', 'background-color: green;');

        } else {
          items[2].setAttribute('style', 'background-color: darkorange;');

        }

      }

    } else {
      items[2].removeAttribute('style');
    }

    // Cetvrto pitanje
    if (this.HistoryOfDiseases.selectedValueSmoker !== null) {
      items[3].setAttribute('style', 'background-color: green;');
    } else {
      items[3].removeAttribute('style');
    }

    /*// Peto pitanje
    if (this.HistoryOfDiseases.QuantityOfAlcoholPerWeek.toString().length !== 0) {
      items[6].setAttribute('style', 'background-color: green;');
    } else {
      items[6].removeAttribute('style');
    }

    //Sesto pitanje
    if (this.HistoryOfDiseases.selectedValueSleepDuringDay != null) {
      if (this.HistoryOfDiseases.selectedValueSleepDuringDay === 0) {
        items[7].setAttribute('style', 'background-color: green;');
      } else {
        // tslint:disable-next-line: max-line-length
        if (this.HistoryOfDiseases.selectedValuesWhen != null && this.HistoryOfDiseases.HowLongDoYouSleepDuringDay.toString().length !== 0 && this.HistoryOfDiseases.NumberOfNapsPerWeek.toString().length != 0 && this.HistoryOfDiseases.selectedValueRested != null) {
          items[7].setAttribute('style', 'background-color: green;');

        } else {
          items[7].setAttribute('style', 'background-color: darkorange;');

        }

      }

    } else {
      items[7].removeAttribute('style');
    }

    //Sedmo pitanje
    if (this.HistoryOfDiseases.selectedValueTimeOfDay !== null) {
      items[8].setAttribute('style', 'background-color: green;');
    } else {
      items[8].removeAttribute('style');
    }

    //Osmo pitanje
    if (this.HistoryOfDiseases.selectedValueWakeUpDuringTheNight != null) {
      if (this.HistoryOfDiseases.selectedValueWakeUpDuringTheNight == 0) {
        items[9].setAttribute('style', 'background-color: green;');
      } else {
        // tslint:disable-next-line: max-line-length
        if (this.HistoryOfDiseases.selectedValueHardToFallAsleepAgain != null && this.HistoryOfDiseases.NumberOfTimes.toString().length !== 0 && this.HistoryOfDiseases.selectedValueWatchTV != null && this.HistoryOfDiseases.selectedValueGetOutOfBed != null) {
          items[9].setAttribute('style', 'background-color: green;');

        } else {
          items[9].setAttribute('style', 'background-color: darkorange;');

        }

      }

    } else {
      items[9].removeAttribute('style');
    }

    //Deveto pitanje
    if (this.HistoryOfDiseases.selectedValueWakeUpWithPain != null) {
      if (this.HistoryOfDiseases.selectedValueWakeUpWithPain == 0) {
        items[10].setAttribute('style', 'background-color: green;');
      } else {

        if (this.HistoryOfDiseases.HowOften.toString().length == 0) {
          items[10].setAttribute('style', 'background-color: darkorange;');
        } else {
          items[10].setAttribute('style', 'background-color: green;');

        }

      }

    } else {
      items[10].removeAttribute('style');
    }

    //Deseto pitanje

    if (this.HistoryOfDiseases.selectedValueFamilyIssueWithSleep != null) {
      if (this.HistoryOfDiseases.selectedValueFamilyIssueWithSleep == 0) {
        items[11].setAttribute('style', 'background-color: green;');
      } else {

        if (this.HistoryOfDiseases.Kinship.length != 0 && this.HistoryOfDiseases.Diagnosis.length != 0) {
          items[11].setAttribute('style', 'background-color: green;');
        } else {
          items[11].setAttribute('style', 'background-color: darkorange;');

        }

      }

    } else {
      items[11].removeAttribute('style');
    }

    // Jedanaesto pitanje

    if (this.HistoryOfDiseases.selectedValueDiedInSleep != null) {
      items[12].setAttribute('style', 'background-color: green;');
    } else {
      items[12].removeAttribute('style');
    }

    // Dvanaesto pitanje
    if (this.HistoryOfDiseases.selectedValueTreatment != null) {
      items[13].setAttribute('style', 'background-color: green;');
    } else {
      items[13].removeAttribute('style');
    }

    // Trinaesto pitanje
    if (this.HistoryOfDiseases.Meds[0] != null && this.HistoryOfDiseases.Dose[0] != null) {
      items[14].setAttribute('style', 'background-color: green;');
    } else {
      items[14].removeAttribute('style');
    }*/

  }

  change(ElementName: string, ListNumber: number) {
    const items = document.getElementsByTagName('li');

    if (ElementName.length !== 0) {
      items[ListNumber].setAttribute('style', 'background-color: green;');
    } else {
      items[ListNumber].removeAttribute('style');
    }
  }


  changeRadio() {
    const items = document.getElementsByTagName('li');

    for (let i = 0; i < arguments.length; i++) {

      if (arguments[i] == 0) {
        items[arguments[arguments.length - 1]].setAttribute('style', 'background-color: green;');
        break;

      } else {
        let Brojac = 0;
        for (let j = 1; j < arguments.length - 1; j++) {

          if (arguments[j] == null) {
            break;

          } else {
            if (arguments[j].length !== 0) { Brojac++; }
          }
        }

        if (Brojac === arguments.length - 2) {
          items[arguments[arguments.length - 1]].setAttribute('style', 'background-color: green;');
          break;

        } else {

          items[arguments[arguments.length - 1]].setAttribute('style', 'background-color: darkorange;');
          break;
        }
      }
    }
  }
}


