import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tablet-formular-epworth',
  templateUrl: './tablet-formular-epworth.component.html',
  styleUrls: ['./tablet-formular-epworth.component.scss']
})
export class TabletFormularEpworthComponent implements OnInit {

  number_explanation = `<div>
    <strong> 0 &diams; neću</strong>
osjećati potrebu za spavanjem(drijemanjem, kunjanjem)
  </div>
  <div>
  <strong>1 &diams; </strong> imat ću <strong>laganu</strong> potrebu za spavanjem(drijemanjem,
    kunjanjem)
    </div>
    <div>
    <strong>2 &diams; </strong> imat ću <strong>veliku</strong> potrebu za spavanjem(drijemanjem,
      kunjanjem)
      </div>
      <div>
      <strong>3 &diams; </strong> imat ću <strong>neodoljivu</strong> potrebu za spavanjem(drijemanjem,
        kunjanjem)
        </div><br>`;

  EP1: number = null;
  EP2: number = null;
  EP3: number = null;
  EP4: number = null;
  EP5: number = null;
  EP6: number = null;
  EP7: number = null;
  EP8: number = null;
  constructor() { }

  ngOnInit() {
  }

   handleChange(e) {
     var items = document.getElementsByTagName("li");
    if (this.EP1 != null){
      items[1].setAttribute("style", "background-color: darkgreen;");
    }
    else {
      items[1].removeAttribute("style");
    }

     if (this.EP2 != null) {
       items[2].setAttribute("style", "background-color: darkgreen;");
     }
     else {
       items[2].removeAttribute("style");
     }

     if (this.EP3 != null) {
       items[3].setAttribute("style", "background-color: darkgreen;");
     }
     else {
       items[3].removeAttribute("style");
     }

     if (this.EP4 != null) {
       items[4].setAttribute("style", "background-color: darkgreen;");
     }
     else {
       items[4].removeAttribute("style");
     }

     if (this.EP5 != null) {
       items[5].setAttribute("style", "background-color: darkgreen;");
     }
     else {
       items[5].removeAttribute("style");
     }

     if (this.EP6 != null){
      items[6].setAttribute("style", "background-color: darkgreen;");
    }
    else {
      items[6].removeAttribute("style");
    }

    if (this.EP7 != null){
      items[7].setAttribute("style", "background-color: darkgreen;");
    }
    else {
      items[7].removeAttribute("style");
    }

     if (this.EP8 != null) {
       items[8].setAttribute("style", "background-color: darkgreen;");
     }
     else {
       items[8].removeAttribute("style");
     }
   }
}

