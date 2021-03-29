import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { GifsModule } from '../gifs/gifs.module';

// 77. Módulo Shared



@NgModule({
  declarations: [
    SidebarComponent
  ],
  exports:[
    SidebarComponent
  ],
  imports: [
    CommonModule,
    GifsModule
  ]
})
export class SharedModule { }
