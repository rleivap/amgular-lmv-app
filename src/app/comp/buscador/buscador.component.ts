import { Component } from '@angular/core';
import { cursos } from 'src/data';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent {
  cursos:any[]=cursos;
  consulta:string='';

}
