import { Component, OnInit } from '@angular/core';
import { ListarService } from './../../listar.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  listarRelaciomamento: Array<any>;

  constructor(private listarService: ListarService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar(){
    this.listarService.listar().subscribe(dados => this.listarRelaciomamento = dados)
  }
}
