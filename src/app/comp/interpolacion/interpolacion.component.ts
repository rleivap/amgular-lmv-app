import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolacion',
  templateUrl: './interpolacion.component.html',
  styleUrls: ['./interpolacion.component.css']
})
export class InterpolacionComponent {
  title = 'Java Front Developer';
  subtitulo: string = 'aplicacion esta ejecutandose';
  dni = "3487634876";
  n1:number=30;
  n2:number=20;
}
