import { Routes } from '@angular/router';
import { ReperacionComponent } from './reparacion.component';

export const routes: Routes = [
  {
    path: '',
    component: ReperacionComponent,
    data: {
      title: $localize`Reparacion`
    }
  }
];

