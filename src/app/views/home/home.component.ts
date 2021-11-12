import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImovelService } from 'src/app/components/product/imovel.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  imoveisArray = this.imovelService.getImoveis();

  Imovel : string | undefined;

  checkoutForm = this.formBuilder.group({
    campo: '',
  });

  constructor (private headerService: HeaderService, private formBuilder: FormBuilder,
    private router: Router, private imovelService : ImovelService) { 

    headerService.headerData ={
      title: 'Inicio',
      icon: 'home',
      routerUrl: ''
    }

  }

  ngOnInit(): void {
  
  }

  onSubmit(): void {
    this.checkoutForm.reset();
  }

  getUrl(){
  return "url('https://news.airbnb.com/wp-content/uploads/sites/4/2021/05/m24NewsroomFeatured_3003x1287.jpg?w=1536')";
  }

  getResult(campo : string) {
      this.router.navigate(['/menu/procura', campo]);
  }
}