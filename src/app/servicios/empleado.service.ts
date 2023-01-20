import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Iempleado } from '../modelo/iempleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  url="http://localhost:3001/empleados";

  constructor(private http:HttpClient) { }

  getEmpleados=()=>{
    let header=new HttpHeaders().set('Type-content','application/json')
    return this.http.get(this.url,{
      headers:header
    })
  }

  nuevoEmpleado=(data:Iempleado)=>{
    return this.http.post<Iempleado>(this.url,data)
    .pipe(map((resp)=>data))
  }

  eliminarEmpleado=(id:number)=>{
    return this.http.delete<Iempleado>(`${this.url}/${id}`)
    .pipe(map((resp)=>resp))
  }
}
