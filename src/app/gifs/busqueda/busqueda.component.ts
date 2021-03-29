import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

// 78. GifsModule y sus componentes
// 79. @ViewChild - Obtener referencias a objetos del HTML

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent {
 
  // EN EL PARENTESIS VA EL NOMBRE DEL ELEMENTO QUE QUEREMOS BUSCAR
  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;//EL "!" SIGNIFICA QUE EL OBJETO NO ES NULO(LE DECIMOS A TYPESCRIPT QUE CONFIE EN NOSOTROS)

  constructor( private gifsService: GifsService){}

  buscar() {

    const valor = this.txtBuscar.nativeElement.value;

    // ESTE IF ES PARA EVITAR QUE SE GUARDEN ELEMENTOS EN BLANCO
    if ( valor.trim().length === 0) {
      return;
    }

    this.gifsService.buscarGifs( valor );

    this.txtBuscar.nativeElement.value = '';
  }
}
