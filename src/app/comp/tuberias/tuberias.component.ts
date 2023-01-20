import { Component } from '@angular/core';

@Component({
  selector: 'app-tuberias',
  templateUrl: './tuberias.component.html',
  styleUrls: ['./tuberias.component.css']
})
export class TuberiasComponent {
  parrafo:string='es un parrafo de un libro de programacion';
  tituloLibro='TRADICIONES PERUANAS';

  precio:number=12345678.678123;
  IGV:number=0.18;
  TECEA:number=0.86;

  ahorro:number=2400;
  fecha:Date=new Date();

  vistasPrincipiante:number=40;
  vistasPromedio:number=600;
  vistasAudiencia:number=1000;
}
