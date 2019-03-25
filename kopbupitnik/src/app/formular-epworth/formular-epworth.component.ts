import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formular-epworth',
  templateUrl: './formular-epworth.component.html',
  styleUrls: ['./formular-epworth.component.scss']
})
export class FormularEpworthComponent implements OnInit {

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

}
