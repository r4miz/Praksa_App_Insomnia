import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  sidebar;
  appTitle: string = 'KOPB upitnik';
  items: MenuItem[];
  constructor(private data: DataService, private router: Router) { }

  ngOnInit() {

    this.items = [
      {
        icon: 'pi pi-info-circle',
        label: 'Prijavite se putem OIB-a',
        routerLink: '/'

      },
      {
        label: 'Upitnici',
        items: [
          {
            label: 'STOP upitnik',
            routerLink: '/stop-formular'
          },
          {
            label: 'Epworthova ljestvica pospanosti',
            routerLink: '/epworth-ljestva'
          },
          {

            label: 'NOSE instrument',
            routerLink: '/nose-formular'
          },
        ]
      },
      {
        label: 'Tablet upitnici',
        items: [
          {
            label: 'STOP upitnik',
            routerLink: '/tab-stop-formular'
          },
          {
            label: 'Epworthova ljestvica pospanosti',
            routerLink: '/tab-epworth-ljestva'
          },
          {

            label: 'NOSE instrument',
            routerLink: '/nose-formular'
          },
        ]
      }

    ];
  }

}


