import { Routes } from '@angular/router';
import { PruebaComponent } from './prueba/prueba.component';
import { PrincipalComponent } from './principal/principal.component';

export const routes: Routes = [
    {path: "", component: PruebaComponent},
    {path: "principal", component: PrincipalComponent}
];
