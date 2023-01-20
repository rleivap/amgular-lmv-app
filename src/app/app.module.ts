import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolacionComponent } from './comp/interpolacion/interpolacion.component';
import { DirectEstructComponent } from './comp/direct-estruct/direct-estruct.component';
import { DirectAtributComponent } from "./comp/direct-atribut/direct-atribut.component";
import { ExamenAdmisionComponent } from './comp/examen-admision/examen-admision.component';
import { NavegadorComponent } from './comp/navegador/navegador.component';
import { HomeComponent } from './comp/home/home.component';
import { PageNotFoundComponent } from './comp/page-not-found/page-not-found.component';
import { TuberiasComponent } from './comp/tuberias/tuberias.component';

import { registerLocaleData } from '@angular/common';
import LocaleEspe from '@angular/common/locales/es-PE';
import { VistasPipe } from './pipes/vistas.pipe';
import { BusquedaCursoPipe } from './pipes/busqueda-curso.pipe';
import { BuscadorComponent } from './comp/buscador/buscador.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateDrivenComponent } from './comp/template-driven/template-driven.component';
import { ModelDrivenComponent } from './comp/model-driven/model-driven.component';
import { HttpClientModule} from '@angular/common/http';
import { GestorEmpleadosComponent } from './comp/gestor-empleados/gestor-empleados.component';
import { ProductosZapatillasComponent } from './comp/productos-zapatillas/productos-zapatillas.component';
import { BusquedaProductoPipe } from './pipes/busqueda-producto.pipe';
import { BusquedaProductoComponent } from './comp/busqueda-producto/busqueda-producto.component';
import { RegclientesBancoComponent } from './comp/regclientes-banco/regclientes-banco.component';
import { GestorPeliculasComponent } from './comp/gestor-peliculas/gestor-peliculas.component';


registerLocaleData(LocaleEspe);

@NgModule({
  declarations: [
    AppComponent,
    InterpolacionComponent,
    DirectEstructComponent,
    DirectAtributComponent,
    ExamenAdmisionComponent,
    NavegadorComponent,
    HomeComponent,
    PageNotFoundComponent,
    TuberiasComponent,
    VistasPipe,
    BusquedaCursoPipe,
    BuscadorComponent,
    TemplateDrivenComponent,
    ModelDrivenComponent,
    GestorEmpleadosComponent,
    ProductosZapatillasComponent,
    BusquedaProductoPipe,
    BusquedaProductoComponent,
    RegclientesBancoComponent,
    GestorPeliculasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    {provide:LOCALE_ID,useValue:'es-PE'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
