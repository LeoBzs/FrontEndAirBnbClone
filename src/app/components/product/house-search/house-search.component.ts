import { Component, OnInit } from '@angular/core';
import { Imovel } from 'src/app/imoveis';
import { ImovelService } from 'src/app/components/product/imovel.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-house-search',
  templateUrl: './house-search.component.html',
  styleUrls: ['./house-search.component.css']
})
export class HouseSearchComponent implements OnInit {

  imovel: Imovel | undefined;

  imoveis = this.imovelService.getAll();

  constructor(private route: ActivatedRoute, private imovelService : ImovelService) { }
  
  ngOnInit(): void {

    const routeParams = this.route.snapshot.paramMap;
    const imovelCampoFromRoute = String(routeParams.get('campo'));

    this.imovelService
      .getByImovel(imovelCampoFromRoute)
      .subscribe((imovel) => (this.imovel = imovel));
  }
  
  routeParams = this.route.snapshot.paramMap;
  displays = String(this.routeParams.get('campo')); 
  
}
