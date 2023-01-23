import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Ipelicula } from '../modelo/ipelicula';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  url="apiserver1.netlify.app/peliculas";

  constructor(private http:HttpClient) { }

  getPeliculas=()=>{
    let header=new HttpHeaders().set('Type-content','application/json')
    return this.http.get(this.url,{
      headers:header
    })
  }

  nuevaPelicula=(data:Ipelicula)=>{
    return this.http.post<Ipelicula>(this.url,data)
    .pipe(map((resp)=>data))
  }

  eliminarPelicula=(id:number)=>{
    return this.http.delete<Ipelicula>(`${this.url}/${id}`)
    .pipe(map((resp)=>resp))
  }
}
