import { Component } from '@angular/core';
import { Razas } from '../../clases/razas';
import { Raza } from '../../interfaces/raza';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-busqueda',
  imports: [InputTextModule,FormsModule,ButtonModule,CommonModule,RouterLink],
  templateUrl: './buscar-raza-nombre.html',
  styleUrl: './buscar-raza-nombre.css',
})
export class BusquedaRazaNombre {

  raza = new Razas()


  razasFiltradas: Raza[] = this.raza.razas
  campoBusqueda: string = '';
  buscarRazaNombre() {

    const t = this.campoBusqueda.toLowerCase();

    this.razasFiltradas = this.raza.razas.filter(r =>
      r.nombre.toLowerCase().includes(t) 
    );

  }
}