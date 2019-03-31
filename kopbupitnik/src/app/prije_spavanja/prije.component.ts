import {Component, OnInit, AfterViewInit} from "@angular/core";

 @Component ({
     templateUrl:'./prije.component.html',
     styleUrls: ['./prije.component.scss']
 })

 export class PrijeComponent implements OnInit, AfterViewInit{
     divider: number = 11;
     prvo: string=null;
     prvo3:string=null;
     drugo:string=null;
     trece:string=null;
     trece1:string=null;
     trece2:string=null;
     cetvrto:string=null;
     cetvrto1:string=null;
     cetvrto2:string=null;
     cetvrto3:string=null;
     peto1:string=null;
     peto2:string=null;
     peto3:string=null;
     sesto1:string=null;
     sedmo1:string=null;
     sedmo2:string=null;
     osmo:string=null;
     deveto:string=null;
     deveto3:string=null;
     deseto:number=null;
     deseto8:string=null;
     ddeseto:number=null;
     jedanaesto:string=null;
     dvanaesto:string=null;
  
  constructor() { }

  ngOnInit() {
  }

   // paginator begin, options: true -> hide page, false -> unhide page
   ngAfterViewInit(): void {
     var items = document.getElementsByTagName("li");
     console.log(items.length);
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


  handleChange(e) {
    var items = document.getElementsByTagName("li");
    if(this.prvo == "prvo1"){
        items[0].setAttribute("style","background-color: darkgreen;");
      }
      else if(this.prvo == "prvo2" && this.prvo3!=null){
        items[0].setAttribute("style","background-color: darkgreen;");
      }
      else if(this.prvo == "prvo2" && this.prvo3==null){
        items[0].setAttribute("style","background-color: darkorange;");
      }
      else{
        items[0].removeAttribute("style");
      }
      if (this.drugo != null){
        items[1].setAttribute("style", "background-color: darkgreen;");
      }
      else {
        items[1].removeAttribute("style");
      }
      if(this.trece == "treceNe"){
        items[2].setAttribute("style","background-color: darkgreen;");
      }
      else if(this.trece == "treceDa"){
        if(this.trece1==null || this.trece2==null){
            items[2].setAttribute("style","background-color: darkorange;");
        }
        else{
            items[2].setAttribute("style","background-color: darkgreen;");
        }
      }
      else{
        items[2].removeAttribute("style");
      }
      if(this.cetvrto == "cetvrtoNe"){
        items[3].setAttribute("style","background-color: darkgreen;");
      }
      else if(this.cetvrto == "cetvrtoDa"){
        if(this.cetvrto1==null || this.cetvrto2==null || this.cetvrto3==null){
            items[3].setAttribute("style","background-color: darkorange;");
        }
        else{
            items[3].setAttribute("style","background-color: darkgreen;");
        }
      }
      else{
        items[3].removeAttribute("style");
      }
      if(this.peto1!=null && this.peto2!=null && this.peto3!=null)
      {
        items[4].setAttribute("style","background-color: darkgreen;");
      }
      else if(this.peto1!=null || this.peto2!=null || this.peto3!=null){
        items[4].setAttribute("style","background-color: darkorange;");
      }
      else{
        items[4].removeAttribute("style");
      }
      if (this.sesto1 != null){
        items[5].setAttribute("style", "background-color: darkgreen;");
      }
      else {
        items[5].removeAttribute("style");
      }
      if(this.sedmo1!=null && this.sedmo2!=null){
        items[6].setAttribute("style", "background-color: darkgreen;");
      }
      else if(this.sedmo1!=null || this.sedmo2!=null){
        items[6].setAttribute("style", "background-color: darkorange;");
      }
      else{
        items[6].removeAttribute("style");
      }
      if(this.osmo== "osmoNe" || this.osmo=="osmoDa"){
        items[7].setAttribute("style", "background-color: darkgreen;");
      }
      else{
        items[6].removeAttribute("style");
      }
      if(this.deveto == "devetoDa"){
        items[8].setAttribute("style","background-color: darkgreen;");
      }
      else if(this.deveto == "devetoNe" && this.deveto3!=null){
        items[8].setAttribute("style","background-color: darkgreen;");
      }
      else if(this.deveto == "devetoNe" && this.deveto3==null){
        items[8].setAttribute("style","background-color: darkorange;");
      }
      else{
        items[8].removeAttribute("style");
      }
      if(this.deseto!= null && this.deseto8!=null && this.ddeseto!=null){
        items[9].setAttribute("style","background-color: darkgreen;");
      }
      else if(this.deseto!= null || this.deseto8!=null || this.ddeseto!=null){
        items[9].setAttribute("style","background-color: darkorange;");
      }
      else{
        items[9].removeAttribute("style");
      }
      if (this.jedanaesto != null){
        items[10].setAttribute("style", "background-color: darkgreen;");
      }
      else {
        items[10].removeAttribute("style");
      }if (this.dvanaesto != null){
        items[11].setAttribute("style", "background-color: darkgreen;");
      }
      else {
        items[11].removeAttribute("style");
      }
  }
  checkPrvo(){
    if(this.prvo=="prvo2"){
      document.getElementById("prvoCheck").hidden = false;
    }
    else{
      document.getElementById("prvoCheck").hidden = true;
    }
  }
  checkTrece(){
    if(this.trece=="treceDa"){
      document.getElementById("treceCheck").hidden = false;
    }
    else{
      document.getElementById("treceCheck").hidden = true;
    }
  }
  checkCetvrto(){
    if(this.cetvrto=="cetvrtoDa"){
      document.getElementById("cetvrtoCheck").hidden = false;
    }
    else{
      document.getElementById("cetvroCheck").hidden = true;
    }
  }
  checkDeveto(){
    if(this.deveto=="devetoNe"){
      document.getElementById("devetoCheck").hidden = false;
    }
    else{
      document.getElementById("devetoCheck").hidden = true;
    }
  }
 }