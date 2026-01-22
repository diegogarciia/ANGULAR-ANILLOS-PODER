import { Component, inject, OnInit, signal } from '@angular/core';
import { PersonajeService } from '../../services/personaje';
import { Personaje } from '../personaje.model'; 

@Component({
  selector: 'app-buscar-personaje',
  templateUrl: './buscar-personaje.html',
})

export class BuscarPersonajeComponent implements OnInit {
  private personajeService = inject(PersonajeService);

  public listaDePersonajes = signal<Personaje[]>([]);

  ngOnInit(): void {
    this.obtenerDatos();
  }

  obtenerDatos() {
    this.personajeService.getPersonajes().subscribe({
      next: (respuesta) => {
        this.listaDePersonajes.set(respuesta);
        console.log('¡Datos recibidos!', respuesta);
      },
      error: (err) => {
        console.error('Error al conectar con el backend:', err);
      }
    });
  }
}