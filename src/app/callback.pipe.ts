import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { Imovel, imoveisArray } from 'src/app/imoveis';
import { ImovelService } from './components/product/imovel.service';
import { HttpClient } from '@angular/common/http';
import { filter } from 'rxjs/operators';

@Pipe({
    name: 'myfilter',
    pure: false
})
export class MyFilterPipe  {

    
   
}