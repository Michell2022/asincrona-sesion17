import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataproductosService } from 'src/app/services/dataproductos.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit{

  id!:number;
  public proDetalle:any;

  constructor(private route:ActivatedRoute, private data:DataproductosService){ } 

  
    ngOnInit(): void {
      
      this.id = Number(this.route.snapshot.paramMap.get('id'));
      this.proDetalle = this.data.datosProducto(this.id);
  
  }
}
