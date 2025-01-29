import { bootstrapApplication } from '@angular/platform-browser';
import { LoginComponent } from './app//login/login.component';
import { appConfig } from './app/app.config'; // ✅ Ensure correct import

bootstrapApplication(LoginComponent, appConfig)
  .catch(err => console.error(err));
