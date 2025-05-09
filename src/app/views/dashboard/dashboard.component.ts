import { Component } from '@angular/core';
import { CardBodyComponent, CardComponent, CardHeaderComponent } from '@coreui/angular-pro';

@Component({
  imports: [CardComponent, CardHeaderComponent, CardBodyComponent],
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent {}
