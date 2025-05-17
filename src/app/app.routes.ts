import { Routes } from '@angular/router';
import { Punto1Component } from './layout/punto1/punto1.component';
import { Punto2Component } from './layout/punto2/punto2.component';
import { Punto3Component } from './layout/punto3/punto3.component';
import { Punto4Component } from './layout/punto4/punto4.component';
import { GeoComponent } from './layout/geo/geo.component';
import { StateComponent } from './layout/state/state.component';

export const routes: Routes = [
  { path: 'punto1', component: Punto1Component, title: 'Punto 1' },
  { path: 'punto2', component: Punto2Component, title: 'Punto 2' },
  { path: 'punto3', component: Punto3Component, title: 'Punto 3' }, 
  { path: 'punto4', component: Punto4Component, title: 'Punto 4' },
  {
    path: 'paises',
    children: [
      {path: '', component: GeoComponent, title: 'Paises'},
      {path: ':countryCode/estados', component: StateComponent, title: 'Estados'},
    ]
  },
  { path: 'states/:countryCode', component: StateComponent, title: 'Estados'},
  { path: '', redirectTo: 'punto1', pathMatch: 'full' },
  { path: '**', redirectTo: 'punto1' }, // Redirige a 'punto1' si la ruta no coincide con ninguna definida
  
];
