import { Component, OnInit } from '@angular/core';
import { evaluaciones } from 'src/data';
@Component({
  selector: 'app-examen-admision',
  templateUrl: './examen-admision.component.html',
  styleUrls: ['./examen-admision.component.css']
})
export class ExamenAdmisionComponent implements OnInit {

    id:any;

    ngOnInit(): void {
      this.id=setInterval(()=>{
        this.continuarEvaluacion();
      }, 5000
      );
    }

    ngOnDestroy(): void{
      if (this.id) {
        clearInterval(this.id);
      }
    }

    eval: number = 1;
    evaluaciones: any[] = evaluaciones;
    btnEvalua: String = "Siguiente Etapa";
    continuarEvaluacion = () => {
      //this.eval=(this.eval===this.evaluaciones.length)?1:this.eval+1;
      this.eval = this.eval + 1;
      this.btnEvalua = this.eval + 1 === 7 ? "Termina Examen" : "Siguiente Etapa";
    }
}
