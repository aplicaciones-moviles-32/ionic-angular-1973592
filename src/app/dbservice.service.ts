import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DbserviceService {

  constructor(private http:HttpClient) { }
  getUser():any{
    return this.http.get('https://instafeka-d1299-default-rtdb.firebaseio.com/usuario.json');
  }
  getPublicaciones():any{
    return this.http.get('https://instafeka-d1299-default-rtdb.firebaseio.com/publicaciones.json');
  }
  getPublicacionesUsuario():any{
    return this.http.get('https://instafeka-d1299-default-rtdb.firebaseio.com/usuario/post.json');
  }
}
