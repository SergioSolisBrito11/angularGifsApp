import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

// 80. GifsService 
// 81. Controlar el historial de búsquedas
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {

  // AQUI INYECTAMOS NUESTRO SERVICIO
  constructor( private gifsService: GifsService) { }

  // EN ESTA FUNCION YA TENEMOS ACCESO A LAS PROPIEDADES DEL SERVICIO
  get historial() {
    return this.gifsService.historial;
  }

  buscar( termino:string ){
    this.gifsService.buscarGifs( termino );
  }
  
}
