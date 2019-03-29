import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-berlinski-upitnik',
  templateUrl: './berlinski-upitnik.component.html',
  styleUrls: ['./berlinski-upitnik.component.scss']
})
export class BerlinskiUpitnikComponent implements OnInit {
  prvo: number=null;
  drugo: number=null;
  trece: number=null;
  cetvrto: number=null;
  peto: number=null;
  sesto: number=null;
  sedmo: number=null;
  osmo: number=null;
  deveto: number=null;
  deseto: number=null;

  constructor() { }

  ngOnInit() {
  }

  handleChange(e) {
    var items = document.getElementsByTagName("li");
    if (this.prvo != null){
      items[0].setAttribute("style", "background-color: darkgreen;");
    }
    else {
      items[0].removeAttribute("style");
    }
    if (this.drugo != null){
      items[1].setAttribute("style", "background-color: darkgreen;");
    }
    else {
      items[1].removeAttribute("style");
    }
    if (this.trece != null){
      items[2].setAttribute("style", "background-color: darkgreen;");
    }
    else {
      items[2].removeAttribute("style");
    }
    if (this.cetvrto != null){
      items[3].setAttribute("style", "background-color: darkgreen;");
    }
    else {
      items[3].removeAttribute("style");
    }
    if (this.peto != null){
      items[4].setAttribute("style", "background-color: darkgreen;");
    }
    else {
      items[4].removeAttribute("style");
    }
    if (this.sesto != null){
      items[5].setAttribute("style", "background-color: darkgreen;");
    }
    else {
      items[5].removeAttribute("style");
    }
    if (this.sedmo != null){
      items[6].setAttribute("style", "background-color: darkgreen;");
    }
    else {
      items[6].removeAttribute("style");
    }
    if (this.osmo != null){
      items[7].setAttribute("style", "background-color: darkgreen;");
    }
    else {
      items[7].removeAttribute("style");
    }
    if (this.deveto != null){
      items[8].setAttribute("style", "background-color: darkgreen;");
    }
    else {
      items[8].removeAttribute("style");
    }
    if (this.deseto != null){
      items[9].setAttribute("style", "background-color: darkgreen;");
    }
    else {
      items[9].removeAttribute("style");
    }
  }

}
