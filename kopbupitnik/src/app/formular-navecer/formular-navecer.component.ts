import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formular-navecer',
  templateUrl: './formular-navecer.component.html',
  styleUrls: ['./formular-navecer.component.scss']
})
export class FormularNavecerComponent implements OnInit {

  prvo: string=null;
  drugo: string=null;
  trece: number=null;
  cetvrto: number=null;
  peto: number=null;

  constructor() { }

  ngOnInit() {
  }


  handleChange(e) 
  {
    var items = document.getElementsByTagName("li");
   if (this.prvo != null){
     items[0].setAttribute("style", "background-color: darkgreen;");
   }
   else {
     items[0].removeAttribute("style");
   }

    if (this.drugo != null) {
      items[1].setAttribute("style", "background-color: darkgreen;");
    }
    else {
      items[1].removeAttribute("style");
    }

    if (this.trece != null) {
      items[2].setAttribute("style", "background-color: darkgreen;");
    }
    else {
      items[2].removeAttribute("style");
    }

    if (this.cetvrto != null) {
      items[3].setAttribute("style", "background-color: darkgreen;");
    }
    else {
      items[3].removeAttribute("style");
    }
    if(this.peto !=null){
      items[4].setAttribute("style", "background-color: darkgreen;");
    }
    else{
      items[4].removeAttribute("style");
    }
    console.log(items);
  }


  checkPrvo(){
    if(this.prvo=="prvoDa"){
      document.getElementById("prvoCheck").hidden = false;
    }
    else{
      document.getElementById("prvoCheck").hidden = true;
    }
  }

  checkDrugo(){
    if(this.drugo=="drugoDa"){
      document.getElementById("drugoCheck").hidden = false;
    }
    else{
      document.getElementById("drugoCheck").hidden = true;
    }
  }

}

