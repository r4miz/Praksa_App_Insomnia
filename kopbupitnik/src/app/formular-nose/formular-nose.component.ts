import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formular-nose',
  templateUrl: './formular-nose.component.html',
  styleUrls: ['./formular-nose.component.scss']
})
export class FormularNoseComponent implements OnInit {

  alergijskiRinitis: number = null;
  operiraliNos: number = null;
  constructor() { }

  ngOnInit() {
  }

}
