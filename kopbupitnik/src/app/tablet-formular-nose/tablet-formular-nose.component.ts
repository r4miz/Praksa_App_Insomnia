import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tablet-formular-nose',
  templateUrl: './tablet-formular-nose.component.html',
  styleUrls: ['./tablet-formular-nose.component.scss']
})
export class TabletFormularNoseComponent implements OnInit {

  alergijskiRinitis: number = null;
  operiraliNos: number = null;
  N1: number = null;
  N2: number = null;
  N3: number = null;
  N4: number = null;
  N5: number = null;

  constructor() { }

  ngOnInit() {
  }

  handleChange(e){
    var items = document.getElementsByTagName("li");

    if (this.alergijskiRinitis != null && this.operiraliNos != null){
      items[0].setAttribute("style", "background-color: darkgreen;");
    }
    else if (this.alergijskiRinitis != null || this.operiraliNos != null){
      items[0].setAttribute("style", "background-color: darkorange;");
    }
    else{
      items[0].removeAttribute("style");
    }

    if (this.N1 != null) {
      items[1].setAttribute("style", "background-color: darkgreen;");
    }
    else {
      items[1].removeAttribute("style");
    }

    if (this.N2 != null) {
      items[2].setAttribute("style", "background-color: darkgreen;");
    }
    else {
      items[2].removeAttribute("style");
    }

    if (this.N3 != null) {
      items[3].setAttribute("style", "background-color: darkgreen;");
    }
    else {
      items[3].removeAttribute("style");
    }

    if (this.N4 != null) {
      items[4].setAttribute("style", "background-color: darkgreen;");
    }
    else {
      items[4].removeAttribute("style");
    }

    if (this.N5 != null) {
      items[5].setAttribute("style", "background-color: darkgreen;");
    }
    else {
      items[5].removeAttribute("style");
    }


  }
}
