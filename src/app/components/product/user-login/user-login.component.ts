import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImovelService } from '../imovel.service';


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

  constructor(private service : ImovelService, private router : Router) {
    this.valid = true
   }

  ngOnInit(): void {
  }

  userLogin(): void {
    this.service.login(this.login).subscribe( obj =>{
      this.valid=obj;
      if(this.valid){ 
        this.router.navigate(['menu/hospedar'])
      }
        
      })
  }

  cancel(): void {
    this.router.navigate([''])
  }
  
}