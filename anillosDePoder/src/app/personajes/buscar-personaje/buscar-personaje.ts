import { Component, inject, OnInit, signal } from '@angular/core';
import { PersonajeService } from '../../services/personaje';
import { Personaje } from '../personaje.model'; 
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-buscar-personaje',
  templateUrl: './buscar-personaje.html',
  standalone: true,
  imports: [ButtonModule]
})

export class BuscarPersonajeComponent implements OnInit {
  private personajeService = inject(PersonajeService);

  public listaDePersonajes = signal<Personaje[]>([]);

  private router = inject(Router);

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

  insertar() {
    this.router.navigate(['/insertar-personaje']);
  }

  editar(id: number) {
    this.router.navigate(['/editar-personaje', id]);
  }

}