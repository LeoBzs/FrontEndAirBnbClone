import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { imoveisArray, Imovel } from 'src/app/imoveis';
import { ImovelService } from '../imovel.service';

@Component({
  selector: 'app-Imovel-read-logradouro',
  templateUrl: './cep-read-logradouro.component.html',
  styleUrls: ['./cep-read-logradouro.component.css']
})
export class ImovelReadLogradouroComponent implements OnInit {
  imoveisArray: Imovel[] = imoveisArray;


  displayedColumns = ['Imovel','rua', 'bairro']; 
  constructor( private ImovelService : ImovelService, private route : ActivatedRoute) { 
    this.imoveisArray = []

  }

  ngOnInit(): void {

    const logradouro = " "+ this.route.snapshot.paramMap.get("Imovel");
    this.ImovelService.readByAllImovel(logradouro).subscribe( Imovel => {
      this.imoveisArray = Imovel
      
    })

  }

}
