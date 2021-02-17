import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private router: Router, private ngFireAuth: AngularFireAuth) {}

  logOut() {
    this.ngFireAuth.signOut();
    window.sessionStorage.clear();
    this.router.navigate(['']);
  }
}
