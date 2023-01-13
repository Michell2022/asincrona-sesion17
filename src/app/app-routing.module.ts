import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaproductosComponent } from './components/listaproductos/listaproductos.component';
import { BreakingComponent } from './pages/breaking/breaking.component';
import { DetallesComponent } from './pages/detalles/detalles.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [

  { path: '', component: HomeComponent},
  { path: 'productos', component:ListaproductosComponent },
  { path: 'detalle/:id/:codigo', component:DetallesComponent },

  { path:'404', component:BreakingComponent },
  { path: '**', redirectTo: '404', pathMatch: 'full' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
