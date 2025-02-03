import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  username = localStorage.getItem('loggedInUser');

  constructor(private router: Router) {}

  logout() {
    localStorage.removeItem('loggedInUser');
    this.router.navigate(['/signin']);
  }
}
