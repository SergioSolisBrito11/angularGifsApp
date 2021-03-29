import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';

// 78. GifsModule y sus componentes
// 84. Mostrar los resultados en pantalla


@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styles: [
  ]
})
export class ResultadosComponent {

  get resultados(){
    return this.gifService.resultados;
  }

  constructor( private gifService: GifsService) { }

 

}
