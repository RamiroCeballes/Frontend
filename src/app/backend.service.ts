import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BackendService {

  public apiUrl = 'http://localhost:3000/users'; 

  constructor(private http: HttpClient) { }

  // Método para realizar una solicitud GET
  async obtenerDatos(): Promise<any> {
    try {
      const datos = await this.http.get<any>(`${this.apiUrl}`).toPromise();
      return datos;
    } catch (error) {
      console.error('Error al obtener datos:', error);
      throw error;
    }
  }
  // Método para realizar una solicitud POST
  async enviarDatos(data: any): Promise<any> {
    return this.http.post<any>(`${this.apiUrl}/users`, data);
  }
}