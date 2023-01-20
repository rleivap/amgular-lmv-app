import { Component } from '@angular/core';
import { productos } from 'src/data';

@Component({
  selector: 'app-busqueda-producto',
  templateUrl: './busqueda-producto.component.html',
  styleUrls: ['./busqueda-producto.component.css']
})
export class BusquedaProductoComponent {
  productos:any[]=productos;
  consulta:string='';
}
