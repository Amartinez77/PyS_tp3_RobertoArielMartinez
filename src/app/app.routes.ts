import { Routes } from '@angular/router';
import { Punto1Component } from './layout/punto1/punto1.component';
import { Punto2Component } from './layout/punto2/punto2.component';

export const routes: Routes = [
  { path: 'punto1', component: Punto1Component, title: 'Punto 1' },
  { path: 'punto2', component: Punto2Component, title: 'Punto 2' },
  { path: '', redirectTo: 'punto1', pathMatch: 'full' },
  { path: '**', redirectTo: 'punto1' }, // Redirige a 'punto1' si la ruta no coincide con ninguna definida
  
];
