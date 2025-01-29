import { provideRouter } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const appConfig = {
  providers: [
    provideRouter([
      { path: '', component: LoginComponent }, // Default route
      { path: 'dashboard', component: DashboardComponent } // Dashboard route
    ])
  ]
};
