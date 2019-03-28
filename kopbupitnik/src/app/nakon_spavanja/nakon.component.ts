import {Component, OnInit} from "@angular/core";

 @Component ({
     templateUrl:'./nakon.component.html',
     styleUrls: ['./nakon.component.scss']

 })

 export class NakonComponent implements OnInit{
    prvo: string = null;
    drugo: number=null;
    trece: string= null;
    cetvrto: number=null;
    peto: string= null;
    sesto: number=null;
    sedmo1: number=null;
    sedmo2: number=null;
    sedmo3: number=null;
    sedmo4: number=null;
    sedmo5: number=null;
    osmo: number=null;
    deveto: number=null;
    deseto: number=null;
    jedanaesto: number=null;
    dvanaesto: string=null;
    dvanaesto3: string=null;
    trinaesto: string=null;
    trinaesto3: string=null;
    cetrnaesto: string=null;

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
  if (this.sedmo1 != null && this.sedmo2 != null && this.sedmo3 != null && this.sedmo4 != null && this.sedmo5 != null) {
    items[6].setAttribute("style", "background-color: darkgreen;");
  }
  else if (this.sedmo1 != null || this.sedmo2 != null || this.sedmo3 != null && this.sedmo4 != null && this.sedmo5 != null) {
    items[6].setAttribute("style", "background-color: darkorange;");
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
  if (this.jedanaesto != null){
    items[10].setAttribute("style", "background-color: darkgreen;");
  }
  else {
    items[10].removeAttribute("style");
  }
  if(this.dvanaesto == "dvanaesto1"){
      items[11].setAttribute("style","background-color: darkgreen;");
  }
  else if(this.dvanaesto == "dvanaesto2" && this.dvanaesto3!=null){
    items[11].setAttribute("style","background-color: darkgreen;");
  }
  else if(this.dvanaesto == "dvanaesto2" && this.dvanaesto3==null){
    items[11].setAttribute("style","background-color: darkorange;");
  }
  else{
    items[11].removeAttribute("style");
  }
  if(this.trinaesto == "trinaesto1"){
    items[12].setAttribute("style","background-color: darkgreen;");
  }
  else if(this.trinaesto == "trinaesto2" && this.trinaesto3!=null){
    items[12].setAttribute("style","background-color: darkgreen;");
  }
  else if(this.trinaesto == "trinaesto2" && this.trinaesto3==null){
    items[12].setAttribute("style","background-color: darkorange;");
  }
  else{
    items[12].removeAttribute("style");
  }
  if (this.cetrnaesto != null){
    items[13].setAttribute("style", "background-color: darkgreen;");
  }
  else {
    items[13].removeAttribute("style");
  }
}

checkDvanaesto(){
  if(this.dvanaesto=="dvanaesto2"){
    document.getElementById("dvanaestoCheck").hidden = false;
  }
  else{
    document.getElementById("dvanaestoCheck").hidden = true;
  }
}
checkTrinaesto(){
  if(this.trinaesto=="trinaesto2"){
    document.getElementById("trinaestoCheck").hidden = false;
  }
  else{
    document.getElementById("trinaestoCheck").hidden = true;
  }
}
 }