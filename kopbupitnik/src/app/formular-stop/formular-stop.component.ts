import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { SelectItem } from 'primeng/components/common/selectitem';


@Component({
  selector: 'app-formular-stop',
  templateUrl: './formular-stop.component.html',
  styleUrls: ['./formular-stop.component.scss']
})
export class FormularStopComponent implements OnInit {

  visina: number = null;
  tjelesnaMasa: number = null;
  dob: number = null;
  ovratniciKosulje: SelectItem[];
  selectedOvratnik: number;
  opsegVrata: number = null;
  opsegStruka: number = null;
  opsegBokova: number = null;
  vozac: number = 0; // 1|| 0  
  prometna: number = 0; // 1 || 0
  brojPrometnihNezgoda: number = null;
  S1: number = null;
  S2: number = null;
  S3: number = null;
  S4: number = null;
  S5: number = null;
  S6: number = null;
  S7: number = null;
  S8: number = null;

  constructor(private data: DataService) {

    this.ovratniciKosulje = [
      { label: 'S', value: 39 },
      { label: 'M', value: 41 },
      { label: 'L', value: 43 },
      { label: 'XL', value: 45 },
      { label: 'XXL', value: 47 }
    ];
  }

  ngOnInit() {
    
  }

}
