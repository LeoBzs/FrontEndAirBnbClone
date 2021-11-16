import { ImovelService } from 'src/app/components/product/imovel.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Imovel } from '../../Imovel.model';

@Component({
  templateUrl: './cadastro-imovel.component.html',
  styleUrls: ['./cadastro-imovel.component.css']
})
export class CadastroImovelComponent implements OnInit {

email: any |undefined
senha : any | undefined

imovel : Imovel = {
  arCondicionado: false,
  camaSolteiro: 0,
  camaCasal: 0,
  quartos: 1,
  descricao: "",
  imagemURL: "",
  valorDaDiaria: 0.0,
  telefoneProprietario: 0,
   cep: "",
   cidade: "",
    bairro: "",
    uf: "",
    rua: "",
      numero: 0,
   complemento: ""

}  


  constructor(private service : ImovelService, private router : Router) { 
    
  }

  ngOnInit(): void {     
  }

  postImovel(): void {
    this.service.createImovel(this.imovel).subscribe( () =>{   
    this.router.navigate([''])} )


  }
  cancel(): void {
    this.router.navigate([''])
  }

}
