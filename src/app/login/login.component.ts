import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,  // ✅ Standalone component
  imports: [CommonModule, FormsModule],  // ✅ Import necessary modules
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  private users = [
    { email: 'test@example.com', password: 'password123' },
    { email: 'admin@example.com', password: 'admin@123' }
  ];

  constructor() {}

  onSubmit(event: Event) {
    event.preventDefault();  // ✅ Prevent default form submission
    console.log('Form submitted');  // ✅ Debugging

    const emailInput = (document.getElementById('email') as HTMLInputElement).value;
    const passwordInput = (document.getElementById('password') as HTMLInputElement).value;

    const user = this.users.find(u => u.email === emailInput && u.password === passwordInput);

    if (user) {
      alert('Login successful!');
    } else {
      alert('Invalid email or password. Please try again.');
    }
  }
}
