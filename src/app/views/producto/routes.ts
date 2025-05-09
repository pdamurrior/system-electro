import { Routes } from '@angular/router';
import { ProductoComponent } from './producto.component';

export const routes: Routes = [
  {
    path: '',
    component: ProductoComponent,
    data: {
      title: $localize`Producto`
    }
  }
];

