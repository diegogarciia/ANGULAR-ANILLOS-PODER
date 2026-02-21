import { Component, inject } from '@angular/core';
import { JuegoService } from '../services/juego';
import { Pregunta } from '../interfaces/pregunta';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-juego',
  standalone: true,
  imports: [ButtonModule, CardModule],
  templateUrl: './juego.html',
  styleUrls: ['./juego.css']
})
export class Juego {
  private juegoService = inject(JuegoService);

  public partidaId: number | null = null;
  public preguntaActual: Pregunta | null = null;
  public preguntasJugadas: number[] = [];
  public aciertos: number = 0;
  
  public estadoJuego: 'inicio' | 'jugando' | 'ganado' | 'perdido' = 'inicio';

  empezar() {
    this.juegoService.empezarPartida().subscribe({
      next: (partida) => {
        this.partidaId = partida.id;
        this.aciertos = 0;
        this.preguntasJugadas = [];
        this.estadoJuego = 'jugando';
        this.cargarSiguientePregunta();
      },
      error: (err) => console.error('Error al empezar partida:', err)
    });
  }

  cargarSiguientePregunta() {
    let idAleatorio;
    do {
      idAleatorio = Math.floor(Math.random() * 30) + 1;
    } while (this.preguntasJugadas.includes(idAleatorio));

    this.preguntasJugadas.push(idAleatorio);

    this.juegoService.obtenerPregunta(idAleatorio).subscribe({
      next: (pregunta) => this.preguntaActual = pregunta,
      error: (err) => console.error('Error al cargar pregunta:', err)
    });
  }

  responder(respuestaIndex: number) {
    if (!this.preguntaActual || !this.partidaId) return;

    this.juegoService.comprobarRespuesta(this.preguntaActual.id, respuestaIndex).subscribe({
      next: (esCorrecta) => {
        if (esCorrecta) {
          this.juegoService.marcarCorrecta(this.partidaId!).subscribe(() => {
            this.aciertos++;
            if (this.aciertos === 5) {
              this.estadoJuego = 'ganado';
              this.juegoService.registrarVictoria();
            } else {
              this.cargarSiguientePregunta();
            }
          });
        } else {
          this.juegoService.finalizarPartida(this.partidaId!).subscribe(() => {
            this.estadoJuego = 'perdido';
            this.juegoService.registrarDerrota();
          });
        }
      }
    });
  }
}