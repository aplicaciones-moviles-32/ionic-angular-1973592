import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DbserviceService } from '../dbservice.service';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.scss'],
})
export class PublicacionesComponent implements OnInit {
  posts: any=[];

  constructor(private http:HttpClient, private db:DbserviceService) { }

  ngOnInit():void {
    this.db.getPublicacionesUsuario().subscribe(res=>{
      this.posts=res;
      console.log(res);
    })
  }
  estado:string ='activo';
  tooglepublicaciones(activo:string):void{
    this.estado=activo;
  }
}
