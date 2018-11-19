import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { GeolocalisationComponent } from './geolocalisation/geolocalisation.component';
import { CandyBoxComponent } from './candy-box/candy-box.component';
import { ContactComponent } from './contact/contact.component';
import { RulesgameComponent } from './rulesgame/rulesgame.component';


const routes: Routes = [
{ path: '', component: AccueilComponent },
{ path: 'candyplay', component: GeolocalisationComponent },
{ path: 'candy-box', component: CandyBoxComponent },
{ path: 'contact', component: ContactComponent },
{ path: 'rulesgame', component: RulesgameComponent},
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],

})
export class AppRoutingModule { }
