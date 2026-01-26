import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Personaje } from '../personaje.model';
import { PersonajeService } from '../../services/personaje';
import { FormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
  selector: 'app-editar-personaje',
  templateUrl: './editar-personaje.html',
  standalone: true,
  imports: [
    FormsModule,
    InputTextModule,
    InputNumberModule,
    ButtonModule,
    ProgressSpinnerModule
  ] 
})
export class EditarPersonajeComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private personajeService = inject(PersonajeService);

  public personaje = signal<Personaje | undefined>(undefined);

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    
    if (idParam) {
        const id = Number(idParam);
        this.personajeService.getPersonajePorId(id).subscribe({
            next: (p: Personaje) => this.personaje.set(p),
            error: (err: any) => console.error('Error al cargar personaje', err)
        });
    } else {
        this.personaje.set({
            nombre: '',
            raza: '',
            fechaNacimiento: '',
            nivelCorrupcion: 0
        } as Personaje);
    }
  }

  guardarCambios() {
    const p = this.personaje();
    if (!p) return;
    
    if (p.id) {
      this.personajeService.actualizarPersonaje(p.id, p).subscribe({
        next: () => this.router.navigate(['/personajes']),
        error: (err) => console.error('Error al actualizar:', err)
      });
    } else {
      this.personajeService.insertarPersonaje(p).subscribe({
        next: () => this.router.navigate(['/personajes']),
        error: (err) => console.error('Error al insertar:', err)
      });
    }
  }
  
}