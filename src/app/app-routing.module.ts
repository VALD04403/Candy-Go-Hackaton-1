import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { AccueilComponent } from './accueil/accueil.component';
import { GeolocalisationComponent } from './geolocalisation/geolocalisation.component';
import { CandyBoxComponent } from './candy-box/candy-box.component';
import { ContactComponent } from './contact/contact.component'


const routes: Routes = [
{ path: 'default', component: AccueilComponent },
{ path: '', redirectTo: 'default', pathMatch: 'full' },
{ path: 'candyplay', component: GeolocalisationComponent },
{ path: 'candy-box', component: CandyBoxComponent },
{ path: 'contact', component: ContactComponent },
]

@NgModule({
	exports: [ RouterModule ],
	imports: [ RouterModule.forRoot(routes) ],

})
export class AppRoutingModule { }
