import { Routes } from '@angular/router';
import { Detalle } from './anillo/detalle/detalle';
import { Busqueda } from './anillo/busqueda/busqueda';
import { DetalleRaza } from './raza/detalle-raza/detalle-raza';
import { BusquedaRazaNombre } from './raza/buscar-raza-nombre/buscar-raza-nombre';
import { BusquedaRazaRegion } from './raza/buscar-raza-region/buscar-raza-region';

export const routes: Routes = [
    { path: 'detalle', component: Detalle },
    { path: 'buscar', component: Busqueda },
    { path: 'detalleRaza', component: DetalleRaza},
    { path: 'buscarRazaPorNombre', component: BusquedaRazaNombre},
    { path: 'buscarRazaPorRegion', component: BusquedaRazaRegion}
];
