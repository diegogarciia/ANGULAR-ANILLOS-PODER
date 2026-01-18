import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-detalle-raza',
  imports: [ReactiveFormsModule, SelectModule,InputTextModule,TextareaModule,SelectButtonModule,ButtonModule, RouterLink],
  templateUrl: './detalle-raza.html',
  styleUrl: './detalle-raza.css',
})
export class DetalleRaza {

 }

