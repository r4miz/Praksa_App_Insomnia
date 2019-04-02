import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularEpworthComponent } from './formular-epworth/formular-epworth.component';
import { FormularNoseComponent } from './formular-nose/formular-nose.component';
import { FormularStopComponent } from './formular-stop/formular-stop.component';
import { HomeComponent } from './home/home.component';
import { TabletFormularStopComponent } from './tablet-formular-stop/tablet-formular-stop.component';
import { TabletFormularEpworthComponent } from './tablet-formular-epworth/tablet-formular-epworth.component';
import { TabletFormularNoseComponent } from './tablet-formular-nose/tablet-formular-nose.component';
import { TabletSimptomiComponent } from './tablet-simptomi/tablet-simptomi.component';
import { BerlinskiUpitnikComponent } from './berlinski-upitnik/berlinski-upitnik.component';
import { NakonComponent } from './nakon_spavanja/nakon.component';
import { PrijeComponent } from './prije_spavanja/prije.component';
import { FormularUjutroComponent } from './formular-ujutro/formular-ujutro.component';
import { FormularNavecerComponent } from './formular-navecer/formular-navecer.component';
import { TabletPittsburghSleepQualityIndexComponent } from './tablet-pittsburgh-sleep-quality-index/tablet-pittsburgh-sleep-quality-index.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'epworth-ljestva', component: FormularEpworthComponent },
  { path: 'nose-formular', component: FormularNoseComponent }, 
  { path: 'stop-formular', component: FormularStopComponent },
  { path: 'tab-stop-formular', component: TabletFormularStopComponent },
  { path: 'tab-epworth-ljestva', component: TabletFormularEpworthComponent },
  { path: 'tab-nose-formular', component: TabletFormularNoseComponent},
  { path: 'tab-simptomi-formular', component: TabletSimptomiComponent},
  { path: 'berlinski-upitnik',component: BerlinskiUpitnikComponent},
  { path: 'nakon-spavanja',component: NakonComponent},
  { path: 'prije-spavanja',component: PrijeComponent},
  { path: 'ujutro', component: FormularUjutroComponent},
  { path: 'navecer', component: FormularNavecerComponent},
  { path: 'tab-pittsburgh-formular', component: TabletPittsburghSleepQualityIndexComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
