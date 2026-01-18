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
  templateUrl: './buscar-raza-region.html',
  styleUrl: './buscar-raza-region.css',
})
export class BusquedaRazaRegion {

  raza = new Razas()


  razasFiltradas: Raza[] = this.raza.razas
  campoBusqueda: string = '';
  buscarRazaRegion() {

    const t = this.campoBusqueda.toLowerCase();

    this.razasFiltradas = this.raza.razas.filter(r =>
      r.regionPrincipal.toLowerCase().includes(t)
    );

  }
}