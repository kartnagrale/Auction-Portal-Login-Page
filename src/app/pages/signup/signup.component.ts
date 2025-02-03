import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  imports: [NgIf, RouterModule, FormsModule], 
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  signUp() {
    if (this.authService.signUp(this.username, this.password)) {
      this.router.navigate(['/signin']);
    } else {
      this.errorMessage = 'Username already exists!';
    }
  }
}
