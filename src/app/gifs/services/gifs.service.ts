import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SerchGifsResponse } from '../interface/gifs.interfaces';

// 84. Mostrar los resultados en pantalla
// 85. Colocando un tipado a las peticiones http
// 86. LocalStorage
// 87. Cargar imágenes automáticamente
// 88. Obtener imágenes desde el sidebar
// 89. HttpParams

// ESTE SERVICIO SERÁ UNICO Y GLOBAL CON "provideIn" NO ES NECESARIO COLOCARLOS EN LOS "providers" del "gifs.module.ts" 
@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string ='uvtEt271mMjwyVuHim8y0PHV5YX0C0kx';
  private servicioUrl: string = 'https://api.giphy.com/v1/gifs';
  
  // LISTADO PARA ALMACENAR LA INFORMACION QUE SE ESTÁ INGRESANDO EN EL INPUT  
  private _historial: string[] = [];

  // TODO: CAMBIAR ANY POR SU TIPO CORRESPONDIENTE
  public resultados: Gif[] = [];


  get historial() {
    return [...this._historial];
  }

  // INYECTAMOS EL SERVICIO DE "HttpClient" ESTE NOS PERMITE HACER PETICIONES HTTP
  constructor ( private http: HttpClient ){

    if ( localStorage.getItem('historial')) {
      this._historial = JSON.parse( localStorage.getItem('historial')! )
    }
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
  }

  buscarGifs( query: string = ''){

    // PARA ALMACENAR TODO EL CONTENIDO EN MINÚSCULA 
    query = query.trim().toLowerCase();
   
    // SI NO INCLUYE ("!") EL "query" SE VA A INSERTAR Y SE HACE EL CORTE
    if ( !this._historial.includes( query )) {
        // "unshift" PARA INSERTAR AL INICIO 
        this._historial.unshift( query );

        // "splice" PARA CORTAR EL ARREGLO LOS DOS INDICES INDICAN DE QUÉ POSICIÓN A QUE POSICIÓN SERÁ EL CORTE
        this._historial = this._historial.splice(0,10);

        // PARA GUARDAR EN LocalStorage 
        localStorage.setItem('historial', JSON.stringify( this._historial ));
    }

    const params = new HttpParams()
    .set('api_key', this.apiKey)
    .set('limit', '10')
    .set('q', query );


    this.http.get<SerchGifsResponse>(`${ this.servicioUrl }/search`, { params })
        .subscribe( (resp )=> {
          console.log(resp.data);
          this.resultados = resp.data;
          localStorage.setItem('resultados',JSON.stringify( this.resultados ));
        })
  }
}
