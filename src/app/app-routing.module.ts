import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscadorComponent } from './comp/buscador/buscador.component';
import { BusquedaProductoComponent } from './comp/busqueda-producto/busqueda-producto.component';
import { DirectAtributComponent } from './comp/direct-atribut/direct-atribut.component';
import { DirectEstructComponent } from './comp/direct-estruct/direct-estruct.component';
import { ExamenAdmisionComponent } from './comp/examen-admision/examen-admision.component';
import { GestorEmpleadosComponent } from './comp/gestor-empleados/gestor-empleados.component';
import { GestorPeliculasComponent } from './comp/gestor-peliculas/gestor-peliculas.component';
import { HomeComponent } from './comp/home/home.component';
import { InterpolacionComponent } from './comp/interpolacion/interpolacion.component';
import { ModelDrivenComponent } from './comp/model-driven/model-driven.component';
import { PageNotFoundComponent } from './comp/page-not-found/page-not-found.component';
import { ProductosZapatillasComponent } from './comp/productos-zapatillas/productos-zapatillas.component';
import { RegclientesBancoComponent } from './comp/regclientes-banco/regclientes-banco.component';
import { TemplateDrivenComponent } from './comp/template-driven/template-driven.component';
import { TuberiasComponent } from './comp/tuberias/tuberias.component';

const routes: Routes = [
  {path:'interpolacion=componente',component:InterpolacionComponent},
  {path:'directivas-estructuralaes',component:DirectEstructComponent},
  {path:'directivas-atributos',component:DirectAtributComponent},
  {path:'caso-examen-admision',component:ExamenAdmisionComponent},
  {path:'tuberias-formato-salida',component:TuberiasComponent},
  {path:'inicio',component:HomeComponent},
  {path:'buscador-curso',component:BuscadorComponent},
  {path:'template-driven',component:TemplateDrivenComponent},
  {path:'model-driven',component:ModelDrivenComponent},
  {path:'gestor-empleados',component:GestorEmpleadosComponent},
  {path:'productos-zapatillas', component:ProductosZapatillasComponent},
  {path: 'buscador-productos', component:BusquedaProductoComponent},
  {path: 'regcli-banco', component:RegclientesBancoComponent},
  {path: 'gestor-peliculas',component:GestorPeliculasComponent}, 
  {path:'',redirectTo:'inicio',pathMatch:'full'},
  {path:'**',pathMatch:'full',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
