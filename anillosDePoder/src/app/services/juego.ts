import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pregunta } from '../interfaces/pregunta';
import { Estadisticas } from '../interfaces/estadisticas';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})

export class JuegoService {
  private http = inject(HttpClient);
  private baseUrl = `${environment.apiUrl}`;

  obtenerPregunta(idPregunta: number): Observable<Pregunta> {
    return this.http.get<Pregunta>(`${this.baseUrl}/obtenerPregunta/${idPregunta}`);
  }

  comprobarRespuesta(idPregunta: number, respuestaUsuario: number): Observable<boolean> {
    return this.http.get<boolean>(`${this.baseUrl}/respuesta/${idPregunta}/?respuestaUsuario=${respuestaUsuario}`);
  }

  empezarPartida(): Observable<any> {
    return this.http.get(`${this.baseUrl}/empezarPartida/`);
  }

  marcarCorrecta(idPartida: number): Observable<any> {
    return this.http.put(`${this.baseUrl}/correcta/${idPartida}/`, {});
  }

  finalizarPartida(idPartida: number): Observable<any> {
    return this.http.put(`${this.baseUrl}/finalizar/${idPartida}/`, {});
  }

  obtenerEstadisticas(): Estadisticas {
    const stats = localStorage.getItem('estadisticasAnillos');
    if (stats) {
      return JSON.parse(stats);
    }
    return { jugadas: 0, victorias: 0, derrotas: 0 };
  }

  registrarVictoria() {
    const stats = this.obtenerEstadisticas();
    stats.jugadas++;
    stats.victorias++;
    localStorage.setItem('estadisticasAnillos', JSON.stringify(stats));
  }

  registrarDerrota() {
    const stats = this.obtenerEstadisticas();
    stats.jugadas++;
    stats.derrotas++;
    localStorage.setItem('estadisticasAnillos', JSON.stringify(stats));
  }
}