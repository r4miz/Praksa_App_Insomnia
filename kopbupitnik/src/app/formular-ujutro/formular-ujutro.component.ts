import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formular-ujutro',
  templateUrl: './formular-ujutro.component.html',
  styleUrls: ['./formular-ujutro.component.scss']
})
export class FormularUjutroComponent implements OnInit {


  prvo: number=null;
  drugo: number=null;
  trece: number=null;
  cetvrto: number=null;
  peto: number=null;
  orange: number=null;
  
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

    if (this.cetvrto != null && this.orange!=null) {
      items[3].setAttribute("style", "background-color: darkgreen;");
    }
    else if (this.cetvrto!=null && this.orange==null)
    {
      items[3].setAttribute("style", "background-color: darkorange;");
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
    console.log(this.orange);
  }
    
checkCetvrto(){
  if(this.cetvrto!=null){
    document.getElementById("cetvrtoCheck").hidden = false;
  }
  else{
    document.getElementById("cetvrtoCheck").hidden = true;
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
