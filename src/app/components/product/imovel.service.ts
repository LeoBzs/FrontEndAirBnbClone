import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//import { Imovel } from 'src/app/components/product/cep.model'
import { imoveisArray, Imovel } from 'src/app/imoveis';

@Injectable({
  providedIn: 'root'
})
export class ImovelService {

  imoveisArray: Imovel[] = imoveisArray;

  constructor(private http : HttpClient) { }

  configUrl = 'assets/assetsArray.json';


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
