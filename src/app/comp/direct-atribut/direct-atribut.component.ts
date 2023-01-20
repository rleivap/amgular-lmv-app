import { Component, OnInit } from '@angular/core';
import { cursos } from 'src/data';

@Component({
  selector: 'app-direct-atribut',
  templateUrl: './direct-atribut.component.html',
  styleUrls: ['./direct-atribut.component.css']
})
export class DirectAtributComponent implements OnInit {

  edad: number = 10;
  //arreglo
  cursos: any[] = cursos;

  asignaEstilo = (nivel: string) => {
    let estilo;
    switch (nivel) {
      case 'basico': {
        estilo = { 'color': 'green', 'font-size': '25px', 'background-color': 'black' }
        break;
      }

      case 'intermedio': {
        estilo = { 'color': 'gold', 'font-size': '28px', 'background-color': 'black' }
        break;
      }

      case 'avanzado': {
        estilo = { 'color': 'white', 'font-size': '30px', 'background-color': 'yellowgreen' }
        break;
      }


      default: {
        break;
      }

    }

    return estilo;
  }

  fnClase = () => {
    return false;
  }

  indicadorEstilo: boolean = true;
  fnDefineEstilo = () => {
    let estiloAlta = 'text-primary display-2 lead';
    let estiloBaja = 'text-danger display-2 lead';
    return this.indicadorEstilo ? estiloAlta : estiloBaja;
  }
  btnCambiaEstilo: string = 'Cambiar Estilo';
  cambiaEstiloParrafo = () => {
    this.indicadorEstilo = !this.indicadorEstilo;
  }

  constructor() { }
  id: any;

  ngOnInit(): void {
    this.id = setInterval(() => {
      this.cambiaEstiloParrafo();
    }, 1000)
  }

  ngOnDestroy(): void {
    if(this.id){
      clearInterval(this.id);
    }
  }


}

