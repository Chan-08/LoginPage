import { ApplicationConfig } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter, Routes } from '@angular/router';

// Define routes if needed (modify as per your application needs)
const routes: Routes = [
  // Example route, modify as per your app structure
  // { path: '', component: LoginComponent },
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(routes)
  ]
};
