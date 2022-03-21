import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListarService {

  listarURL = 'http://localhost:8080/listar/'

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<any[]>(`${this.listarURL}`)
  }
}
