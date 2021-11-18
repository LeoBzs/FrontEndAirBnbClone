

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../../template/Usuario.model';
import { ImovelService } from '../imovel.service';

@Component({
  templateUrl: './cadastro-locatario.component.html',
  styleUrls: ['./cadastro-locatario.component.css']
})
export class CadastroLocatarioComponent implements OnInit {
  usuario : any = {
    nome: "",
    idade: 0,
    telefone: 0,
    email: "",
    senha: ""
  }

  constructor(private service : ImovelService, private router : Router) { }

  ngOnInit(): void {
  }

  postUser(): void {
    this.service.createUser(this.usuario).subscribe( () =>{   
    this.router.navigate([''])} )
  }

  cancel(): void {
    this.router.navigate([''])
  }

}
