import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  userDetails: any = {}; // Initialize as an empty object
  users: any[] = []; // To store all users' data
  isDataLoaded: boolean = false; // Flag to indicate if data is loaded

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    const userEmail = localStorage.getItem('loggedInUser');
    
    if (!userEmail) {
      this.router.navigate(['/login']); // Redirect to login if no user is logged in
      return;
    }

    // Fetch the users' data from the JSON file
    this.http.get<any[]>('assets/users.json').subscribe(
      (data) => {
        this.users = data;
        this.userDetails = this.users.find((user) => user.email === userEmail);
        this.isDataLoaded = true; // Data is loaded, set flag to true
      },
      (error) => {
        console.error('Error loading user data:', error);
      }
    );
  }
}
