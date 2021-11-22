
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { imoveisArray, Imovel } from 'src/app/imoveis';
import {MatSnackBar} from '@angular/material/snack-bar'; 
@Injectable({
  providedIn: 'root'
})
export class ImovelService {

  imovelURL = "https://airbnd-clone-back-springboot.herokuapp.com/imovel/listar"
  imoveIdURL = "https://airbnd-clone-back-springboot.herokuapp.com/imovel/" 
  userURL = "https://airbnd-clone-back-springboot.herokuapp.com/usuario/salvar/"
  userLoginURL = "https://airbnd-clone-back-springboot.herokuapp.com/usuario/login?email="
  configUrl = 'https://airbnd-clone-back-springboot.herokuapp.com/imovel/listar';
  configUrlAdd = 'https://airbnd-clone-back-springboot.herokuapp.com/imovel/salvar';

  imoveisArray: Imovel[] = imoveisArray;

  constructor(private snackBar : MatSnackBar,private http : HttpClient) { }

  showMessage(msg : string): void{
    this.snackBar.open(msg, "X",  {
      duration: 3000,
      horizontalPosition: "center",
      verticalPosition: "top"
  });
  }
                          
    getAll(): Observable<Imovel[]> {
      return this.http.get<Imovel[]>(this.configUrl);
    }

    addImovel(Imovel : any): Observable<Imovel[]> {
      return this.http.post<Imovel[]>(this.configUrl, Imovel);
    }

    login(login: any): Observable<any>{
      return this.http.get<any>(this.userLoginURL+login.email+`&senha=`+login.senha)
    }

  readyImovelById(id:number):  Observable<any>{
    return this.http.get<any>(this.imoveIdURL)
}

createImovel(imovel : any): Observable<any>{
  return this.http.post<any>(this.imoveIdURL, imovel)
}
createUser(user : any): Observable<any>{
  return this.http.post<any>(this.userURL, user)
}

  
  readyAllImoveis():  Observable<any[]>{
      return this.http.get<any[]>(this.imovelURL)
  }

    readByAllImovel(Imovel: string) : Observable<Imovel[]>{
        const url = `http://localhost:4200/menu/procura/` + Imovel;
        return this.http.get<Imovel[]>(url)
      
    }
 
  getByImovel(item: string) : Observable<Imovel>{
    const url = 'http://localhost:4200/menu/procura/'
      return this.http.get<Imovel>('http://localhost:4200/menu/procura/' + item);
    }

    getImoveis(){
      return this.imoveisArray;
    }

}

