import { Component, inject, OnInit, signal, ViewChild } from '@angular/core';
import { PersonajeService } from '../../services/personaje';
import { Personaje } from '../personaje.model'; 
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ConfirmarPopup } from '../../modales/confirmar-popup/confirmar-popup'; 
import { ConfiguracionPopup } from '../../interfaces/configuracionPopup';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-buscar-personaje',
  templateUrl: './buscar-personaje.html',
  standalone: true,
  imports: [ButtonModule, ConfirmarPopup, TableModule]
})
export class BuscarPersonajeComponent implements OnInit {
  private personajeService = inject(PersonajeService);
  private router = inject(Router);

  public listaDePersonajes = signal<Personaje[]>([]);
  
  @ViewChild(ConfirmarPopup) hijoPopup!: ConfirmarPopup;
  public configuracionHijo!: ConfiguracionPopup;

  ngOnInit(): void {
    this.obtenerDatos();
  }

  obtenerDatos() {
    this.personajeService.getPersonajes().subscribe({
      next: (respuesta) => this.listaDePersonajes.set(respuesta),
      error: (err) => console.error('Error al conectar con el backend:', err)
    });
  }

  prepararBajaFisica(personaje: Personaje, evento: Event) {
    this.configuracionHijo = {
      message: 'Se va a borrar de forma definitiva el registro. ¿Estás seguro?',
      header: 'Atención: Borrado Crítico',
      nameButton: 'Borrar Definitivamente',
      severity: 'danger',
      accion: () => this.ejecutarBajaFisica(personaje.id)
    };
    this.hijoPopup.confirm2(evento);
  }

  prepararBajaLogica(personaje: Personaje, evento: Event) {
    this.configuracionHijo = {
      message: '¿Estás seguro de dar de baja a este personaje?',
      header: 'Confirmar Baja Lógica',
      nameButton: 'Dar de Baja',
      severity: 'warn',
      accion: () => this.ejecutarBajaLogica(personaje.id)
    };
    this.hijoPopup.confirm2(evento);
  }

  prepararReactivacion(personaje: Personaje, evento: Event) {
    this.configuracionHijo = {
      message: '¿Deseas reactivar a este personaje?',
      header: 'Confirmar Reactivación',
      nameButton: 'Reactivar',
      severity: 'success',
      accion: () => this.ejecutarReactivar(personaje.id)
    };
    this.hijoPopup.confirm2(evento);
  }

  private ejecutarBajaFisica(id: number) {
    this.personajeService.bajaFisica(id).subscribe({
      next: () => this.obtenerDatos(),
      error: (err) => {
        console.error('No se pudo eliminar', err);
      }
    });
  }

  private ejecutarBajaLogica(id: number) {
    this.personajeService.bajaLogica(id).subscribe(() => this.obtenerDatos());
  }

  private ejecutarReactivar(id: number) {
    this.personajeService.reactivar(id).subscribe(() => this.obtenerDatos());
  }

  insertar() {
    this.router.navigate(['/insertar-personaje']);
  }

  editar(id: number) {
    this.router.navigate(['/editar-personaje', id]);
  }

}