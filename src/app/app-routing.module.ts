
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { CadastroImovelComponent } from './components/product/cadastro-imovel/cadastro-imovel.component';
import { CadastroLocatarioComponent } from './components/product/cadastro-locatario/cadastro-locatario.component';
import { VisualizarImoveisComponent } from './components/product/visualizar-imoveis/visualizar-imoveis.component';
import { HouseSearchComponent } from './components/product/house-search/house-search.component';

const routes: Routes = [
{
  path:"",
  component : HomeComponent
},
{
  path: "menu/procura/:campo",
  component : HouseSearchComponent
},
{
  path: "menu/cadastro",
  component : CadastroLocatarioComponent
},
{
  path: "menu/hospedar",
  component : CadastroImovelComponent
},
{
  path: "menu/imoveis",
  component : VisualizarImoveisComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
