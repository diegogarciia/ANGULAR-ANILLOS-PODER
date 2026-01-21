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
  
  constructor(private http: HttpClient) { }

  getPersonajes(): Observable<Personaje[]> {
    return this.http.get<Personaje[]>(this.apiUrl);
  }
}