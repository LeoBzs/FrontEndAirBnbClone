import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImovelService } from '../imovel.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  login : any = {
    email :  "",
    senha: ""
  }


  valid: boolean 

  constructor(private snackBar: MatSnackBar, private service : ImovelService, private router : Router) {
    this.valid = true
   }



  ngOnInit(): void {
  }

  userLogin(): void {
    this.service.login(this.login).subscribe( obj =>{
      this.valid=obj;

      if(this.valid){ 
       // this.router.navigate(['menu/hospedar']);
        this.service.showMessage("Login Efetuado com Sucesso!")
    }else{
      this.service.showMessage("Emai ou Senha inválido!") //aqui só irá funcionar se trocar no back para status 200 OK por hora

    }

      })
  }

  cancel(): void {
    this.router.navigate([''])
  }
  
}
