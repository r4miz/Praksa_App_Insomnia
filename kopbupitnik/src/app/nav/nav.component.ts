import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { SelectItem } from 'primeng/api';



@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  sidebar;
  desktop: SelectItem[];
  tablet: SelectItem[];
  appTitle: string = 'KOPB upitnik';
  items: MenuItem[];
  SelDesktopFormular: string = null;
  SelTabletFormular: string = null;

  constructor(private data: DataService, private router: Router) {  }

  ngOnInit() { }

  close(){
    this.sidebar = false;
  }
}


