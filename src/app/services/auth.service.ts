import { Injectable } from '@angular/core';
import * as bcrypt from 'bcryptjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor() {}

  signUp(username: string, password: string): boolean {
    if (localStorage.getItem(username)) return false; // User exists

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    localStorage.setItem(username, hash);
    return true;
  }

  signIn(username: string, password: string): boolean {
    const storedHash = localStorage.getItem(username);
    return storedHash ? bcrypt.compareSync(password, storedHash) : false;
  }
}
