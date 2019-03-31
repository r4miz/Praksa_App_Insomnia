import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-tablet-simptomi',
  templateUrl: './tablet-simptomi.component.html',
  styleUrls: ['./tablet-simptomi.component.scss']
})
export class TabletSimptomiComponent implements OnInit, AfterViewInit {
  
  divider: number = 11;
  SI1: number = null;
  SI2: number = null;
  SI3: number = null;
  SI4: number = null;
  SI5: number = null;
  SI6: number = null;
  SI7: number = null;
  SI8: number = null;
  SI9: number = null;
  SI10: number = null;
  SI11: number = null;
  SI12: number = null;
  SI13: number = null;
  SI14: number = null;
  SI15: number = null;
  SI16: number = null;
  SI17: number = null;
  SI18: number = null;
  SI19: number = null;
  SI19TextArea: string = null;

  constructor() { }

  ngOnInit() {
  }
  
  checkTextAreaContent() {
    var txt = document.getElementById('float-input');
    console.log(txt);
    if (this.SI19 != 0) {
      txt.removeAttribute('readonly');
    }
    else {
      txt.setAttribute('readonly', 'true');
    }
  }
  handleChange(e) {
    var Simplequestions = [
      this.SI1, this.SI2, this.SI3, this.SI4, this.SI5,
      this.SI6, this.SI7, this.SI8, this.SI9, this.SI10,
      this.SI11, this.SI12, this.SI13, this.SI14, this.SI15,
      this.SI16, this.SI17, this.SI18
    ];
    var items = document.getElementsByTagName("li");
    for (let index = 0; index < Simplequestions.length; index++) {
      if (Simplequestions[index] != null) {
        items[index].setAttribute("style", "background-color: darkgreen;");
      }
      else {
        items[index].removeAttribute("style");
      }
    }// triba skrpat da se ponaračasti ako je covik odgovoria dobro, pa izbrisa i osa dalje...
    if ((this.SI19 != null && this.SI19TextArea != null) || (this.SI19 == 0)) {
      items[18].setAttribute("style", "background-color: darkgreen;");
    }
    else if (this.SI19 != null || this.SI19TextArea != null) {
      items[18].setAttribute("style", "background-color: darkorange;");
    }
    else {
      items[18].removeAttribute("style");
    }

  }

  // paginator begin, options: true -> hide page, false -> unhide page
  ngAfterViewInit(): void {
    var items = document.getElementsByTagName("li");
    this.handleOverflowTabsAfterDivider(items, true);
  }

  // after 11th question hide or unhide
  handleOverflowTabsAfterDivider(items, decision: boolean) {
    if (items.length > this.divider) {
      for (let index = this.divider; index < items.length; index++) {
        items[index].hidden = decision;
      }
    }
  }

  // before 11th question hide or unhide
  handleOverflowTabsBeforeDivider(items, decision: boolean) {
    if (items.length > this.divider) {
      for (let index = 0; index < this.divider; index++) {
        items[index].hidden = decision;
      }
    }
  }

  next() {
    var items = document.getElementsByTagName("li");
    this.handleOverflowTabsBeforeDivider(items, true);
    this.handleOverflowTabsAfterDivider(items, false);
  }
  prev() {
    var items = document.getElementsByTagName("li");
    this.handleOverflowTabsAfterDivider(items, true);
    this.handleOverflowTabsBeforeDivider(items, false);
  }
  // paginator end

}
