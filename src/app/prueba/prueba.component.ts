import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BackendService } from '../backend.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

export interface MiModelo {
  user: string;
  pass: string;
}

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
    MatPaginatorModule,
    MatTableModule,
  ],
  
  templateUrl: './prueba.component.html',
  styleUrl: './prueba.component.css'
})

export class PruebaComponent implements OnInit {

  displayedColumns: string[] = ['user', 'pass'];
  dataSource: MatTableDataSource<MiModelo> | any;
  miFormulario: FormGroup | any;
  email: String= "";
  sort: any;
  paginator: any;
  constructor(private router: Router,
    private backendService: BackendService
  ) { }
  async ngOnInit(): Promise<void> {
    this.miFormulario = new FormGroup({
      user: new FormControl(''), // Campo 'nombre'
      pass: new FormControl('')   // Campo 'email'
    });
      const data= await this.backendService.obtenerDatos()
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
  }
  siguiente(){
    this.router.navigate(['/principal']);  
  }
  onSubmit(): void {
    console.log(this.miFormulario.value)
    this.backendService.enviarDatos(this.miFormulario.value); // Imprime los valores del formulario en la consola
}
aplicarFiltro(event: Event) {
  const filtro = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filtro.trim().toLowerCase();
}
}