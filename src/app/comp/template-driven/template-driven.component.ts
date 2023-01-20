import { Component } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent {
  validaPrecio = (event: any) => {

    const reg = /^-?\d*(\.\d{0,3})?$/;
    let input = event.target.value + String.fromCharCode(event.charCode);

    if (!reg.test(input)) {
      event.preventDefault();
    }

  }

  resultado:any;
  frutas:any[]=[];
  enviaFruta=(value:any)=>{
    this.resultado=value;
    this.frutas.push(value);
  }
}
