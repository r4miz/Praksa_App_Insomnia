import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TabViewModule } from 'primeng/tabview';
import { DropdownModule } from 'primeng/dropdown';
import { FormularNoseComponent } from './formular-nose/formular-nose.component';
import { FormularStopComponent } from './formular-stop/formular-stop.component';
import { FormularEpworthComponent } from './formular-epworth/formular-epworth.component';
import { CardModule } from 'primeng/card';
import { SpinnerModule } from 'primeng/spinner'; 
import { FormsModule } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';
import { MenubarModule } from 'primeng/menubar';
import { TabletFormularStopComponent } from './tablet-formular-stop/tablet-formular-stop.component';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { TabletFormularEpworthComponent } from './tablet-formular-epworth/tablet-formular-epworth.component';
import { SidebarModule } from 'primeng/sidebar';
import { TabletFormularNoseComponent } from './tablet-formular-nose/tablet-formular-nose.component';
import { AccordionModule } from 'primeng/accordion';
import { TabletSimptomiComponent } from './tablet-simptomi/tablet-simptomi.component';
import { BerlinskiUpitnikComponent } from './berlinski-upitnik/berlinski-upitnik.component';
import { NakonComponent } from './nakon_spavanja/nakon.component';
import { PrijeComponent} from './prije_spavanja/prije.component';
import { FormularUjutroComponent } from './formular-ujutro/formular-ujutro.component';
import { FormularNavecerComponent } from './formular-navecer/formular-navecer.component';
import { TabletPittsburghSleepQualityIndexComponent} from './tablet-pittsburgh-sleep-quality-index/tablet-pittsburgh-sleep-quality-index.component';
import { InputMaskModule} from 'primeng/inputmask';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    FormularNoseComponent,
    FormularStopComponent,
    FormularEpworthComponent,
    TabletFormularStopComponent,
    TabletFormularEpworthComponent,
    TabletFormularNoseComponent,
    TabletSimptomiComponent,
    BerlinskiUpitnikComponent,
    NakonComponent,
    PrijeComponent,
    FormularUjutroComponent,
    FormularNavecerComponent,
    TabletPittsburghSleepQualityIndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToolbarModule,
    ButtonModule,
    SplitButtonModule,
    TabViewModule,
    DropdownModule, 
    CardModule, 
    SpinnerModule,
    FormsModule,
    BrowserAnimationsModule,
    RadioButtonModule, 
    MenubarModule,
    ScrollPanelModule,
    SidebarModule,
    AccordionModule,
    InputMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
