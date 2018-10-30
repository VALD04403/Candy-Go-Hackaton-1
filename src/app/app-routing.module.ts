import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { AccueilComponent } from './accueil/accueil.component'
import {  } from

const routes: Routes = [
{ path: 'default', component: AccueilComponent },
{ path: '', redirectTo: '/default', pathMatch: 'full' },

]

@NgModule({
	exports: [ RouterModule ],
	imports: [ RouterModule.forRoot(routes) ],

})
export class AppRoutingModule { }
