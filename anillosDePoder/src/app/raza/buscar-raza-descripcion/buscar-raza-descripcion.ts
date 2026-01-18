import { Component } from '@angular/core';
import { Razas } from '../../clases/razas';
import { Raza } from '../../interfaces/raza';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TableModule } from 'primeng/table'; 

@Component({
  selector: 'app-busqueda',
  imports: [InputTextModule,FormsModule,ButtonModule,CommonModule,RouterLink, TableModule],
  templateUrl: './buscar-raza-descripcion.html',
  styleUrl: './buscar-raza-descripcion.css',
})
export class BusquedaRazaDescripcion {

  raza = new Razas()


  razasFiltradas: Raza[] = this.raza.razas
  campoBusqueda: string = '';
  buscarRazaDescripcion() {

    const t = this.campoBusqueda.toLowerCase();

    this.razasFiltradas = this.raza.razas.filter(r =>
      r.descripcion.toLowerCase().includes(t)
    );

  }
}