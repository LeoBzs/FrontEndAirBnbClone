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

  configUrl = 'https://airbnd-clone-back-springboot.herokuapp.com/imovel/listar';

  configUrlAdd = 'https://airbnd-clone-back-springboot.herokuapp.com/imovel/salvar';

  imoveIdURL = "https://airbnd-clone-back-springboot.herokuapp.com/imovel/"; 
                          
    getAll(): Observable<Imovel[]> {
      return this.http.get<Imovel[]>(this.configUrl);
    }

    addImovel(Imovel : any): Observable<Imovel[]> {
      return this.http.post<Imovel[]>(this.configUrl, Imovel);
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
    createImovel(imovel : any): Observable<any>{
      return this.http.post<any>(this.imoveIdURL, imovel)
    }
}
