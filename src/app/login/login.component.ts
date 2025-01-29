import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.http.get<any[]>('assets/users.json').subscribe(
      data => {
        this.users = data;
      },
      error => {
        console.error('Error loading user data:', error);
      }
    );
  }

  onSubmit(event: Event) {
    event.preventDefault();
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
