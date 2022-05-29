import { Component , OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DbserviceService} from '../dbservice.service';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  constructor(private db:DbserviceService, private http:HttpClient) {}
  publicaciones:any=[];
  ngOnInit(){
    this.mostrarPublicaciones();
  }
  mostrarPublicaciones(){
    this.db.getPublicaciones().subscribe(res=>{
      this.publicaciones=res;
    });
  }
}
