import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Empleado } from 'src/app/modelo/empleado';
import { Iempleado } from 'src/app/modelo/iempleado';
import { EmpleadoService } from 'src/app/servicios/empleado.service';

@Component({
  selector: 'app-gestor-empleados',
  templateUrl: './gestor-empleados.component.html',
  styleUrls: ['./gestor-empleados.component.css']
})
export class GestorEmpleadosComponent implements OnInit{

  empleados:Iempleado[]=[];
  empObj:Empleado= new Empleado(); 

  formEmpleado =new FormGroup({
    nombre:new FormControl(),
    apellidos:new FormControl(),
    cargo:new FormControl(),
  })

  ngOnInit(): void {
    this.listar();
  }

  constructor(private empleadoService:EmpleadoService){}

  listar=()=>{
    this.empleadoService.getEmpleados().subscribe((resp:any)=>{
      this.empleados=resp;
    })
  }

  registrar=()=>{
    this.empObj.nombre=this.formEmpleado.value.nombre;
    this.empObj.apellidos=this.formEmpleado.value.apellidos;
    this.empObj.cargo=this.formEmpleado.value.cargo;

    this.empleadoService.nuevoEmpleado(this.empObj).subscribe(resp=>{
      this.formEmpleado.reset();
      this.listar();
    })
  }


  eliminar=(empleado:Iempleado)=>{
    this.empleadoService.eliminarEmpleado(empleado.id).subscribe(resp=>{
      this.listar();
    })
  }

}