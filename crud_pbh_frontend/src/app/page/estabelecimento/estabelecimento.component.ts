import { Component, OnInit } from '@angular/core';
import { EstabelecimentoClass } from './../../class/estabelecimento-class';
import { EstabelecimentoService } from './../../estabelecimento.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-estabelecimento',
  templateUrl: './estabelecimento.component.html',
  styleUrls: ['./estabelecimento.component.css']
})
export class EstabelecimentoComponent implements OnInit {
  
  listarEstabelecimento: Array<any>;
  cadastrarEstabelecimento: EstabelecimentoClass = new EstabelecimentoClass();

  constructor(private estabelecimentoService: EstabelecimentoService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar(){
    this.estabelecimentoService.listar().subscribe(dados => this.listarEstabelecimento = dados)
  }

  adicionar(){
    this.estabelecimentoService.adicionar(this.cadastrarEstabelecimento).subscribe(dados => this.listarEstabelecimento.push(dados))
    this.limpar();
  }

  limpar(){
    this.cadastrarEstabelecimento = new EstabelecimentoClass();
  }

  editar(){
    this.estabelecimentoService.editar(this.cadastrarEstabelecimento).subscribe(() => this.listar())
  }

  atualizarEstabelecimento(index: number){
    this.cadastrarEstabelecimento = this.listarEstabelecimento[index];
  }

  condicaoCadastrar(){    
    if (this.cadastrarEstabelecimento.id_estabelecimento === undefined){
      this.adicionar()

      Swal.fire({
        icon: 'success',
        title: 'Sucesso!',
        text: 'Estabelecimento cadastrado.',
        confirmButtonColor: '#007BFF'
      })
    }else{
      this.editar();

      Swal.fire({
        icon: 'success',
        title: 'Sucesso!',
        text: 'Estabelecimento atualizado.',
        confirmButtonColor: '#007BFF'
      })
    }
  }

  deletar(id: number){
    this.estabelecimentoService.deletar(id).subscribe(() => this.listar())

    Swal.fire({
      icon: 'success',
      title: 'Sucesso!',
      text: 'Estabelecimento excluído.',
      confirmButtonColor: '#007BFF'
    })
  }

}