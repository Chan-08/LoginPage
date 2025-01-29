import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true, // ✅ Must be standalone
  template: `<h2>Welcome to the Dashboard!</h2>`,
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {}
