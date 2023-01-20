import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Ipelicula } from 'src/app/modelo/ipelicula';
import { Pelicula } from 'src/app/modelo/pelicula';
import { PeliculasService } from 'src/app/servicios/peliculas.service';

@Component({
  selector: 'app-gestor-peliculas',
  templateUrl: './gestor-peliculas.component.html',
  styleUrls: ['./gestor-peliculas.component.css']
})
export class GestorPeliculasComponent {
  peliculas:Ipelicula[]=[];
  peliObj:Pelicula= new Pelicula(); 

  formPelicula =new FormGroup({
    nombre:new FormControl(),
    estreno:new FormControl(),
    genero:new FormControl(),
    duracion: new FormControl(),
    calificacion: new FormControl()
  })

  ngOnInit(): void {
    this.listar();
  }

  constructor(private peliculaService:PeliculasService){}

  listar=()=>{
    this.peliculaService.getPeliculas().subscribe((resp:any)=>{
      this.peliculas=resp;
    })
  }

  registrar=()=>{
    this.peliObj.nombre=this.formPelicula.value.nombre;
    this.peliObj.estreno=this.formPelicula.value.estreno;
    this.peliObj.genero=this.formPelicula.value.genero;
    this.peliObj.duracion=this.formPelicula.value.duracion;
    this.peliObj.calificacion=this.formPelicula.value.calificacion;
    
    this.peliculaService.nuevaPelicula(this.peliObj).subscribe(resp=>{
      this.formPelicula.reset();
      this.listar();
    })
  }


  eliminar=(empleado:Ipelicula)=>{
    this.peliculaService.eliminarPelicula(empleado.id).subscribe(resp=>{
      this.listar();
    })
  }
}
