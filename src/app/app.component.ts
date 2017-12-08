import { Component, OnInit } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {Usuario} from './usuario';
import {Estatus} from './estatus';
import {HttpClient, HttpHeaders} from '@angular/common/http'


import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp implements OnInit {
  rootPage:any = HomePage;
  usuario:Usuario;
  estatus:Estatus;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private http:HttpClient) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
       
    });
  }
  ngOnInit(): void {
    this.usuario={}
    this.estatus={}
     }
     guardar():void{
      
        this.http.post<Estatus>('http://tesis-unitec.herokuapp.com/api/usuario',
        this.usuario,{headers:new HttpHeaders().set("Content-Type","application/json")})
        .subscribe(datos=>{this.estatus=datos})
        setTimeout(()=>{
          
        console.log("Usuario guardado con estatus "+this.estatus.success);
          
          },2000)
      
      
       }
      
 
}


