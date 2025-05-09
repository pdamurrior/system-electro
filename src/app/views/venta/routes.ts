import { Routes } from '@angular/router';
import { VentaComponent } from './venta.component';

export const routes: Routes = [
  {
    path: '',
    component: VentaComponent,
    data: {
      title: $localize`Venta`
    }
  }
];

