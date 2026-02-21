import { Component, inject, OnInit } from '@angular/core';
import { JuegoService } from '../services/juego';
import { Estadisticas } from '../interfaces/estadisticas';

@Component({
  selector: 'app-estadisticas',
  standalone: true,
  templateUrl: './estadisticas.html',
  styleUrls: ['./estadisticas.css']
})

export class EstadisticasComponent implements OnInit {
  private juegoService = inject(JuegoService);
  
  public estadisticas: Estadisticas = { jugadas: 0, victorias: 0, derrotas: 0 };

  ngOnInit() {
    this.estadisticas = this.juegoService.obtenerEstadisticas();
  }
}