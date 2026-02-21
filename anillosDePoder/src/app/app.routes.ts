import { RouterLink, Routes } from '@angular/router';
import { Detalle } from './anillo/detalle/detalle';
import { Busqueda } from './anillo/busqueda/busqueda';
import { DetalleRaza } from './raza/detalle-raza/detalle-raza';
import { BusquedaRazaNombre } from './raza/buscar-raza-nombre/buscar-raza-nombre';
import { BusquedaRazaRegion } from './raza/buscar-raza-region/buscar-raza-region';
import { BusquedaRazaLongevidad } from './raza/buscar-raza-longevidad/buscar-raza-longevidad';
import { BusquedaRazaDescripcion } from './raza/buscar-raza-descripcion/buscar-raza-descripcion';
import { CrearRaza } from './raza/crear-raza/crear-raza';
import { BuscarPersonajeComponent } from './personajes/buscar-personaje/buscar-personaje';
import { EditarPersonajeComponent } from './personajes/editar-personaje/editar-personaje';
import { Component } from '@angular/core';
import { Padre } from './modales/padre/padre';
import { ConfirmarPopup } from './modales/confirmar-popup/confirmar-popup'
import { PortadoresComponent } from './portadores-component/portadores-component'; 
import { Juego } from './juego/juego';
import { EstadisticasComponent } from './estadisticas/estadisticas';

export const routes: Routes = [
    { path: 'detalle', component: Detalle },
    { path: 'buscar', component: Busqueda },
    { path: 'detalleRaza', component: DetalleRaza},
    { path: 'buscarRazaPorNombre', component: BusquedaRazaNombre},
    { path: 'buscarRazaPorRegion', component: BusquedaRazaRegion},
    { path: 'buscarRazaPorLongevidad', component: BusquedaRazaLongevidad},
    { path: 'buscarRazaPorDescripcion', component: BusquedaRazaDescripcion},
    { path: 'crearRaza', component: CrearRaza},
    { path: 'personajes', component: BuscarPersonajeComponent },
    { path: 'editar-personaje/:id', component: EditarPersonajeComponent },
    { path: 'insertar-personaje', component: EditarPersonajeComponent},
    { path: 'modal', component: ConfirmarPopup }, 
    { path: 'padre', component: Padre },
    { path: 'portadores', component: PortadoresComponent},
    { path: 'juego', component: Juego},
    { path: 'estadisticas', component: EstadisticasComponent},
];