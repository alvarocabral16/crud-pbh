import { Component, OnInit } from '@angular/core';
import { ProfissionalClass } from './../../class/profissional-class';
import { ProfissionalService } from './../../profissional.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profissional',
  templateUrl: './profissional.component.html',
  styleUrls: ['./profissional.component.css']
})
export class ProfissionalComponent implements OnInit {

  listarProfissional: Array<any>;
  cadastrarProfissional: ProfissionalClass = new ProfissionalClass();

  constructor(private profissionalService: ProfissionalService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar(){
    this.profissionalService.listar().subscribe(dados => this.listarProfissional = dados)
  }

  adicionar(){
    this.profissionalService.adicionar(this.cadastrarProfissional).subscribe(dados => this.listarProfissional.push(dados))
    this.limpar();
  }

  limpar(){
    this.cadastrarProfissional = new ProfissionalClass();
  }

  editar(){
    this.profissionalService.editar(this.cadastrarProfissional).subscribe(() => this.listar())
  }

  atualizarProfissional(index: number){
    this.cadastrarProfissional = this.listarProfissional[index];
  }

  condicaoCadastrar(){    
    if (this.cadastrarProfissional.id_profissional === undefined){
      this.adicionar()

      Swal.fire({
        icon: 'success',
        text: 'Profissional cadastrado.',
        title: 'Sucesso!',
        confirmButtonColor: '#007BFF'
      })
    }else{
      this.editar();

      Swal.fire({
        icon: 'success',
        title: 'Sucesso!',
        text: 'Profissional atualizado.',
        confirmButtonColor: '#007BFF'
      })
    }
  }

  deletar(id: number){
    this.profissionalService.deletar(id).subscribe(() => this.listar())

    Swal.fire({
      icon: 'success',
      title: 'Sucesso!',
      text: 'Profissional excluído.',
      confirmButtonColor: '#007BFF'
    })
  }

}