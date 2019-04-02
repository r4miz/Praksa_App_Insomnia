import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-tablet-pittsburgh-sleep-quality-index',
  templateUrl: './tablet-pittsburgh-sleep-quality-index.component.html',
  styleUrls: ['./tablet-pittsburgh-sleep-quality-index.component.scss']
})
export class TabletPittsburghSleepQualityIndexComponent implements OnInit {

  explanation = `<p><strong>
    Upute:</strong><br>Sljedeća pitanja se odnose na Vaše uobičajene navike vezane uz spavanje tijekom
    posljednjih mjesec dana. Molimo odgovorite na <u><i>sva</i></u> pitanja.
  </p>`;
  constructor() { }

  ngOnInit() {
  }

}
