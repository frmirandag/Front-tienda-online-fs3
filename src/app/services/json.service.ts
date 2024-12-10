import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { response } from 'express';
import { error } from 'console';

@Injectable({
  providedIn: 'root'
})
export class JsonService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer 10f8e705-f839-4f6c-8a01-cc951d328f6e'
    })
  }


  private jsonUrl = 'https://firebasestorage.googleapis.com/v0/b/json-sum3.appspot.com/o/productos.json?alt=media&token=10f8e705-f839-4f6c-8a01-cc951d328f6e';

  private lista:any;

  constructor(private http: HttpClient){}


  getJsonData(): Observable<any> {
    return this.http.get(this.jsonUrl);

  }

  MetodoProducto(ListaProductos:any){
    console.log(ListaProductos);
    this.http.post(this.jsonUrl,ListaProductos,this.httpOptions).subscribe(
      response => {
        console.log('Archivo JSON actualizado exitosamente', response);
      },
      error => {
        console.error('Error al actualizar el archivo JSON', error);
      })
  }

}