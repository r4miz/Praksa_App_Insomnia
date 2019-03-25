import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-tablet-formular-stop',
  templateUrl: './tablet-formular-stop.component.html',
  styleUrls: ['./tablet-formular-stop.component.scss']
})
export class TabletFormularStopComponent implements OnInit {

  ovratniciKosulje: SelectItem[];
  dob: number = null;
  visina: number = null;
  tjelesnaMasa: number = null;
  opsegVrata: number = null;
  opsegBokova: number = null;
  opsegStruka: number = null;
  selectedOvratnik: number = null;
  brojPrometnihNezgoda: number = null;
  vozac: number = null;
  prometna: number = null;
  hrkanje: number = null;
  umor: number = null;
  zamijecenost: number = null;
  hipertenzija: number = null;
  diabetes:number = null;
  depresija: number = null;
  astma:number = null;
  zgaravica: number = null;

  constructor() {

    this.ovratniciKosulje = [
      { label: 'S', value: 39 },
      { label: 'M', value: 41 },
      { label: 'L', value: 43 },
      { label: 'XL', value: 45 },
      { label: 'XXL', value: 47 }
    ];
  }

  ngOnInit() {
  }

  handleChange(e) {
    var items = document.getElementsByTagName("li");
    
    if (this.dob != null && this.visina != null && this.tjelesnaMasa != null) {
      items[0].setAttribute("style", "background-color: darkgreen;");
    }
    else if (this.dob != null || this.visina != null || this.tjelesnaMasa != null) {
      items[0].setAttribute("style", "background-color: darkorange;");
    }
    else {
      items[0].removeAttribute("style");
    }


    if (this.selectedOvratnik != null && this.opsegVrata != null && this.opsegBokova != null && this.opsegStruka != null) {
      items[1].setAttribute("style", "background-color: darkgreen;");
    }
    else if (this.selectedOvratnik != null || this.opsegVrata != null || this.opsegBokova != null || this.opsegStruka != null) {
      items[1].setAttribute("style", "background-color: darkorange;");
    }
    else {
      items[1].removeAttribute("style");
    }

    if (this.vozac == 1 && this.prometna == 1 && this.brojPrometnihNezgoda != null) {
      items[2].setAttribute("style", "background-color: darkgreen;");
    }
    else if (this.vozac == 0 && this.prometna == 0 && this.brojPrometnihNezgoda == null) {
      items[2].setAttribute("style", "background-color: darkgreen;");
    }
    else if (this.vozac == 1 && this.prometna == 0 && this.brojPrometnihNezgoda == null) {
      items[2].setAttribute("style", "background-color: darkgreen;");
    }
    else if (this.vozac == 1 || this.prometna == 1 || this.brojPrometnihNezgoda != null) {
      items[2].setAttribute("style", "background-color: darkorange;");
    }
    else {
      items[2].removeAttribute("style");
    }

    if (this.hrkanje != null) {
      items[3].setAttribute("style", "background-color: darkgreen;");
    }
    else {
      items[3].removeAttribute("style");
    }

    if (this.umor != null) {
      items[4].setAttribute("style", "background-color: darkgreen;");
    }
    else {
      items[4].removeAttribute("style");
    }

    if (this.zamijecenost != null) {
      items[5].setAttribute("style", "background-color: darkgreen;");
    }
    else {
      items[5].removeAttribute("style");
    }

    if (this.hipertenzija != null) {
      items[6].setAttribute("style", "background-color: darkgreen;");
    }
    else {
      items[6].removeAttribute("style");
    }

    if (this.diabetes != null) {
      items[7].setAttribute("style", "background-color: darkgreen;");
    }
    else {
      items[7].removeAttribute("style");
    }

    if (this.depresija != null) {
      items[8].setAttribute("style", "background-color: darkgreen;");
    }
    else {
      items[8].removeAttribute("style");
    }

    if (this.astma != null) {
      items[9].setAttribute("style", "background-color: darkgreen;");
    }
    else {
      items[9].removeAttribute("style");
    }
    if (this.zgaravica != null) {
      items[10].setAttribute("style", "background-color: darkgreen;");
    }
    else {
      items[10].removeAttribute("style");
    }
  }

  checkVozacIfTrue() {
    if (this.vozac == 1) {
      document.getElementById("vozacTrue").hidden = false;
    }
    else if (this.vozac == 0) {
      document.getElementById("vozacTrue").hidden = true;
      document.getElementById("prometnaTrue").hidden = true;
      this.prometna = 0;

    }
  }

  checkPrometnaIfTrue() {
    if (this.vozac == 1 && this.prometna == 1) {
      document.getElementById("prometnaTrue").hidden = false;
    }
    else {
      document.getElementById("prometnaTrue").hidden = true;

    }
  }
}
