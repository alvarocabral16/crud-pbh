import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProfissionalClass } from './class/profissional-class';

@Injectable({
  providedIn: 'root'
})
export class ProfissionalService {

  profissionalURL = 'http://localhost:8080/profissional/'

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<any[]>(`${this.profissionalURL}`)
  }

  adicionar(profissional: ProfissionalClass){
    return this.http.post<ProfissionalClass>(`${this.profissionalURL}`, profissional)
  }

  editar(profissional: ProfissionalClass){
    return this.http.put<ProfissionalClass>(`${this.profissionalURL}`, profissional)
  }

  deletar(id: number){
    return this.http.delete<ProfissionalClass>(`${this.profissionalURL}` + id)
  }
}
