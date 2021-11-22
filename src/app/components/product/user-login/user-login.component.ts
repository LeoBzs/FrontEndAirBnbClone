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
    email :  " ",
    senha: " "
  }

  
  constructor(private service : ImovelService, private router : Router) { }

  ngOnInit(): void {
  }

  userLogin(): void {
   // this.service.login(this.login).subscribe( () =>{       
   //     this.router.navigate([''])
   //   })
  }

  cancel(): void {
    this.router.navigate([''])
  }
  
}