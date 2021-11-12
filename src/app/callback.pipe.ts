import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { Imovel, imoveisArray } from 'src/app/imoveis';

@Pipe({
    name: 'myfilter',
    pure: false
})
export class MyFilterPipe implements PipeTransform {

    private counter = 0;
    transform(imoveis: Observable<Imovel[]>, termo: string): Imovel[] {
        this.counter++;
        if(!imoveis || !termo) {
            return imoveisArray;
        }

        return imoveisArray.filter(imoveis => imoveis.campo.indexOf(termo) !== -1);
    }
   
   
}