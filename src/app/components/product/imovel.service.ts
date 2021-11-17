
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//import { Imovel } from 'src/app/components/product/cep.model'
import { imoveisArray, Imovel } from 'src/app/imoveis';

@Injectable({
  providedIn: 'root'
})
export class ImovelService {

  imovelURL = "https://airbnd-clone-back-springboot.herokuapp.com/imovel/listar"
  imoveIdURL = "https://airbnd-clone-back-springboot.herokuapp.com/imovel/" 
  userdURL = "https://airbnd-clone-back-springboot.herokuapp.com/usuario/salvar/"
  imoveisArray: Imovel[] = imoveisArray;

  constructor(private http : HttpClient) { }

  configUrl = 'assets/assetsArray.json';



  readyImovelById(id:number):  Observable<any>{
    return this.http.get<any>(this.imoveIdURL)
}

createImovel(imovel : any): Observable<any>{
  return this.http.post<any>(this.imoveIdURL, imovel)
}
createUser(user : any): Observable<any>{
  return this.http.post<any>(this.userdURL, user)
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
    
    getAll(): Observable<Imovel[]> {
      return this.http.get<Imovel[]>(this.configUrl);
    }

    getImoveis(){
      return this.imoveisArray;
    }
}