import { Component, OnInit } from '@angular/core';
import { ImovelService } from 'src/app/components/product/imovel.service';

@Component({
  templateUrl: './visualizar-imoveis.component.html',
  styleUrls: ['./visualizar-imoveis.component.css']
})

export class VisualizarImoveisComponent implements OnInit {

  imoveis = this.imovelService.getAll();

  constructor(private imovelService : ImovelService) { }

  ngOnInit(): void {
    
  }

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // filtra sabado e domingo -
    return day !== 0 && day !== 6;
  };

  getUrl(){
    return "url('https://media.istockphoto.com/vectors/town-map-seamless-texture-vector-id1151366980')";
    }
}
