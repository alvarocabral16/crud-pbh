import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EstabelecimentoClass } from './class/estabelecimento-class';

@Injectable({
  providedIn: 'root'
})
export class EstabelecimentoService {

  estabelecimentoURL = 'http://localhost:8080/estabelecimento/'

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<any[]>(`${this.estabelecimentoURL}`)
  }

  adicionar(estabelecimento: EstabelecimentoClass){
    return this.http.post<EstabelecimentoClass>(`${this.estabelecimentoURL}`, estabelecimento)
  }

  editar(profissional: EstabelecimentoClass){
    return this.http.put<EstabelecimentoClass>(`${this.estabelecimentoURL}`, profissional)
  }

  deletar(id: number){
    return this.http.delete<EstabelecimentoClass>(`${this.estabelecimentoURL}` + id)
  }
}
