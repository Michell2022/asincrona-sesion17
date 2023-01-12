import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaproductosComponent } from './listaproductos/listaproductos.component';
import { HomeComponent } from './home/home.component';
import { DetallesComponent } from './detalles/detalles.component';



@NgModule({
  declarations: [
    ListaproductosComponent,
    HomeComponent,
    DetallesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
