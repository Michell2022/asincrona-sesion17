import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataproductosService {

  productos: any[] = [
    {
      id:1,
      codigo:1,
      descripcion:'Galletas chokis',
      precompra:10.00,
      preventa:15.00,
      garantia:5,
      existencia:100.00
    },
    {
      id:2,
      codigo:2,
      descripcion:'Mermelada de fresa',
      precompra:65.00,
      preventa:80.00,
      garantia:15,
      existencia:100.00
    },
    {
      id:3,
      codigo:3,
      descripcion:'Aceite',
      precompra:18.00,
      preventa:20.00,
      garantia:2,
      existencia:100.00
    },
    {
      id:4,
      codigo:4,
      descripcion:'Palomitas de maíz',
      precompra:12.00,
      preventa:15.00,
      garantia:3,
      existencia:100.00
    },
    {
      id:5,
      codigo:5,
      descripcion:'Doritos',
      precompra:5.00,
      preventa:8.00,
      garantia:3,
      existencia:100.00
    }
]

  constructor() { }
  //OBTENEMOS EL ID DEL PRODUCTO DE NUESTRA LISTA DE OBJETOS
  datosProducto(id:number){
    //FILTRAMOS CON EL METODO FILTER Y OBTENER EN DETALLE POR MEDIO DE ID
    const items = this.productos.filter(item => item.id === id)
    return items;
  }
}
