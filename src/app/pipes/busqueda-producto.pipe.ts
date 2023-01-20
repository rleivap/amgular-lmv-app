import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'busquedaProducto'
})
export class BusquedaProductoPipe implements PipeTransform {

  transform(value: any[], busquedaProducto: string): any {
    const resultado = [];

    if (busquedaProducto === '') return value;
    for (const producto of value) {
      if (producto.marca.toLowerCase().indexOf(busquedaProducto.toLowerCase()) > -1) {
        resultado.push(producto);
      }
      else if (((producto.precio).toLowerCase().indexOf(busquedaProducto.toLocaleLowerCase()) > -1)) {
        resultado.push(producto);
      }
    }

    return resultado;

  }

}
