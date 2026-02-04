import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Personaje } from '../personajes/personaje.model';

@Injectable({
  providedIn: 'root' 
})
export class PersonajeService {
  private apiUrl = `${environment.apiUrl}/listaPersonajes`;
  private apiUrl2 = `${environment.apiUrl}/obtenerPersonaje`;
  private apiUrl3 = `${environment.apiUrl}/insertarPersonaje`;
  private apiUrl4 = `${environment.apiUrl}/actualizarPersonaje`;
  private apiUrlBajaLogica = `${environment.apiUrl}/bajaLogica`;
  private apiUrlReactivar = `${environment.apiUrl}/reactivar`;
  private apiUrlBajaFisica = `${environment.apiUrl}/bajaFisica`;

  constructor(private http: HttpClient) {}

  getPersonajes(): Observable<Personaje[]> {
    return this.http.get<Personaje[]>(this.apiUrl);
  }

  getPersonajePorId(id: number): Observable<Personaje> {
    return this.http.get<Personaje>(`${this.apiUrl2}/${id}`);
  }

  insertarPersonaje(personaje: Personaje): Observable<Personaje> {
    return this.http.post<Personaje>(this.apiUrl3, personaje);
  }

  actualizarPersonaje(id: number, personaje: Personaje): Observable<Personaje> {
    return this.http.put<Personaje>(`${this.apiUrl4}/${id}`, personaje);
  }

  bajaLogica(id: number): Observable<Personaje> {
    return this.http.put<Personaje>(`${this.apiUrlBajaLogica}/${id}`, {});
  }

  reactivar(id: number): Observable<Personaje> {
    return this.http.put<Personaje>(`${this.apiUrlReactivar}/${id}`, {});
  }

  bajaFisica(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrlBajaFisica}/${id}`);
  }

}