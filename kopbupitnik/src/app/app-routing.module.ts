import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularEpworthComponent } from './formular-epworth/formular-epworth.component';
import { FormularNoseComponent } from './formular-nose/formular-nose.component';
import { FormularStopComponent } from './formular-stop/formular-stop.component';
import { HomeComponent } from './home/home.component';
import { TabletFormularStopComponent } from './tablet-formular-stop/tablet-formular-stop.component';
import { TabletFormularEpworthComponent } from './tablet-formular-epworth/tablet-formular-epworth.component';
import { TabletFormularNoseComponent } from './tablet-formular-nose/tablet-formular-nose.component';
import { BerlinskiUpitnikComponent } from './berlinski-upitnik/berlinski-upitnik.component';
import { NakonComponent } from './nakon_spavanja/nakon.component';
import { PrijeComponent } from './prije_spavanja/prije.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'epworth-ljestva', component: FormularEpworthComponent },
  { path: 'nose-formular', component: FormularNoseComponent }, 
  { path: 'stop-formular', component: FormularStopComponent },
  { path: 'tab-stop-formular', component: TabletFormularStopComponent },
  { path: 'tab-epworth-ljestva', component: TabletFormularEpworthComponent },
  { path: 'tab-nose-formular', component: TabletFormularNoseComponent},
  { path: 'berlinski-upitnik',component: BerlinskiUpitnikComponent},
  { path: 'nakon-spavanja',component: NakonComponent},
  { path: 'prije-spavanja',component: PrijeComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
