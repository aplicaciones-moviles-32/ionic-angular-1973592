import { Component,Input,OnInit } from '@angular/core';
import { getDatabase,onValue,ref } from '@angular/fire/database';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  constructor(private http:HttpClient) {}
  ngOnInit():void{
    this.getUser();
  }
  user:any=[];
  getUser():void{
    this.http.get('https://instafeka-d1299-default-rtdb.firebaseio.com/usuario.json').subscribe(res=>{
      console.log(res);
      this.user=res;
  });
}
}