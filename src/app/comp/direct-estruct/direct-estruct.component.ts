import { Component } from '@angular/core';
import { cursos,evaluaciones } from 'src/data';

@Component({
  selector: 'app-direct-estruct',
  templateUrl: './direct-estruct.component.html',
  styleUrls: ['./direct-estruct.component.css']
})
export class DirectEstructComponent {

  edad: number = 30;
  evaluacion: number = 1;
  btnMensajeEvaluacion: string = "Siguiente evaluacion";
  muestrasgteEvaluacion() {
    this.evaluacion = this.evaluacion + 1;
    this.btnMensajeEvaluacion = this.evaluacion === 5 ? "Termina Evaluacion" : "Siguiente Evaluacion";
  }
    //arreglo
    cursos: any[] = cursos;

    //combinar el ngFor y el ngSwitch
}
