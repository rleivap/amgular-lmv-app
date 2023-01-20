import { Component } from '@angular/core';

@Component({
  selector: 'app-regclientes-banco',
  templateUrl: './regclientes-banco.component.html',
  styleUrls: ['./regclientes-banco.component.css']
})
export class RegclientesBancoComponent {
  validaContrasena = (event: any) => {

    const reg = /^[0-9]+$/;
    let input = event.target.value + String.fromCharCode(event.charCode);

    if (!reg.test(input)) {
      event.preventDefault();
    }

  }

  resultado:any;
  clientes:any[]=[];
  enviaCliente=(value:any)=>{
    this.resultado=value;
    this.clientes.push(value);
  }
}
