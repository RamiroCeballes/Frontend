import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BackendService } from '../backend.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

@Component({
  
  selector: 'app-prueba',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
  ],
  
  templateUrl: './prueba.component.html',
  styleUrl: './prueba.component.css'
})

export class PruebaComponent implements OnInit {
  email: String= "";
  constructor(private router: Router,
    private backendService: BackendService
  ) { }
  async ngOnInit(): Promise<void> {
    console.log(await this.backendService.obtenerDatos());
  }
  siguiente(){
    this.router.navigate(['/principal']);  
  }
}
