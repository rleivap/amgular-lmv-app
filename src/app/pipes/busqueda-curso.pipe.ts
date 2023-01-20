import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'busquedaCurso'
})
export class BusquedaCursoPipe implements PipeTransform {

  transform(value: any[],busquedaCurso: string): any {
    const resultado=[];

    if(busquedaCurso==='') return value;
    for(const curso of value){
      if(curso.nombre.toLowerCase().indexOf(busquedaCurso.toLowerCase())>-1){
        resultado.push(curso);
      }
    }
    
    return resultado;
  }

}
