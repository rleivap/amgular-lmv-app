import { Component, OnInit } from '@angular/core';
import { zapatillas } from 'src/data';

@Component({
  selector: 'app-productos-zapatillas',
  templateUrl: './productos-zapatillas.component.html',
  styleUrls: ['./productos-zapatillas.component.css']
})
export class ProductosZapatillasComponent implements OnInit {

  id:any;

  ngOnInit(): void {
    this.id=setInterval(()=>{
      this.siguienteProducto();
    }, 2000
    );
  }

  ngOnDestroy(): void{
    if (this.id) {
      clearInterval(this.id);
    }
  }

  zap: number = 1;
  zapatillas: any[] = zapatillas;
    siguienteProducto = () => {
    this.zap = this.zap + 1;
  }

}
