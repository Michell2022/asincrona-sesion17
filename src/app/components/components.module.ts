import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ListaproductosComponent } from './listaproductos/listaproductos.component';



@NgModule({
  declarations: [
    HeaderComponent,
    ListaproductosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
