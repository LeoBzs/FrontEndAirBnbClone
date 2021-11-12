import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImovelService } from '../imovel.service';

@Component({
  selector: 'app-cep-read',
  templateUrl: './cep-read.component.html',
  styleUrls: ['./cep-read.component.css']
})
export class CepReadComponent implements OnInit {


    constructor( private imovelService : ImovelService, private route : ActivatedRoute) { 
 
   
    }
  
    ngOnInit(): void {
      
      const logradouro = ""+ this.route.snapshot.paramMap.get("Imovel");
    this.imovelService.readByAllImovel(logradouro).subscribe( Imovel => {
       Imovel

      })

    }
  
  }
  