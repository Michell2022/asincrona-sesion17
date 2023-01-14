import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataproductosService } from 'src/app/services/dataproductos.service';

@Component({
  selector: 'app-listaproductos',
  templateUrl: './listaproductos.component.html',
  styleUrls: ['./listaproductos.component.css']
})
export class ListaproductosComponent implements OnInit {

  myProductos!:any[];
  
  constructor(private dataServices:DataproductosService, private router:Router){} 

    ngOnInit(): void {
    this.myProductos = this.dataServices.productos;
  }

  enviarDatos(id:number){
    this.router.navigate(['/detalle',id])
  }
    
}
