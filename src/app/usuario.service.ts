import { Injectable } from '@angular/core';
import {Http, Response, Headers} from '@angular/http'
import{Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Usuario} from './usuario';
import {Estatus} from './estatus';

@Injectable()

export class UsuarioService {

  usuario = {} as Usuario;
  estatus:Estatus;
miUrl:string='http://tesis-unitec.herokuapp.com/api/usuario';
private headers = new Headers({'Content-Type': 'application/json'});
  constructor(private http:Http) { }

  getUsuarios():Observable<Usuario[]>{
 return this.http.get(this.miUrl)
   .map((respuesta:Response)=><Usuario []>respuesta.json())
  }

  getUsuario(id:string):Observable<Usuario>{
    return this.http.get(this.miUrl+'/'+id).
    map((respuesta:Response)=><Usuario>respuesta.json());
  }

  guardarUsuario(usu:Usuario):Observable<Estatus>{
    return this.http.post(this.miUrl, JSON.stringify(usu),{headers:this.headers}).
    map((respuesta:Response)=><Estatus>respuesta.json());
  }

  actualizarUsuario(usu:Usuario):Observable<Estatus>{
   return this.http.put(this.miUrl, JSON.stringify(usu),{headers:this.headers})
    .map((respuesta:Response)=><Estatus>respuesta.json());
   
  }


  borrarUsuario(id:string):Observable<Estatus>{
    return this.http.delete(this.miUrl+'/'+id)
    .map((respuesta:Response)=><Estatus>respuesta.json())
   
  }
}
