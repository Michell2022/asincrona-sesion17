import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

interface Object{
  id: number,
  codigo: number,
  descripcion: string,
  precompra: number,
  preventa: number,
  garantia: number,
  existencia: number
}

@Component({
  selector: 'app-listaproductos',
  templateUrl: './listaproductos.component.html',
  styleUrls: ['./listaproductos.component.css']
})
export class ListaproductosComponent implements OnInit {

  productos: Object[] = [{id:1, codigo:1, descripcion:'Galletas chokis', precompra:10.00, preventa:15.00, garantia:5, existencia:100.00},
  {id:2,codigo:2, descripcion:'Mermelada de fresa', precompra:65.00, preventa:80.00, garantia:15, existencia:100.00},
  {id:3,codigo:3, descripcion:'Aceite', precompra:18.00, preventa:20.00, garantia:2, existencia:100.00},
  {id:4,codigo:4, descripcion:'Palomitas de maíz', precompra:12.00, preventa:15.00, garantia:3, existencia:100.00},
  {id:5,codigo:5, descripcion:'Doritos', precompra:5.00, preventa:8.00, garantia:3, existencia:100.00}
]

intentando = this.productos.filter((obj:Object) => obj.id);




  id="hola michell";
  codigo="dd";

  constructor(private router:Router, private route:ActivatedRoute){} 

    ngOnInit(): void {
    this.id = String(this.route.snapshot.paramMap.get('id'));
    this.codigo = String(this.route.snapshot.paramMap.get('codigo'));
  }

  gotoUser(id:number){
    this.router.navigate(['/detalle',id,this.codigo])
    // this.router.navigate(['/detalle',codigo])
  }
    
}
