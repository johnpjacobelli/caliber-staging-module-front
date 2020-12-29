import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private fb: FormBuilder, public auth: AngularFireAuth, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  // tslint:disable-next-line:typedef
  loginUser(){
    const manager = this.loginForm.value;
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then(user => console.log('User signed in is: ', user))
    .catch(error => console.log('Error while logging in user: ', error))
    .finally(() => sessionStorage.setItem('currentUser', JSON.stringify(manager)));
    const userString = sessionStorage.getItem('currentUser');
    console.log(userString);
    const myUser = JSON.parse(userString);
    console.log(myUser);
    console.log('User is logged under email: ' + myUser.email);
    this.router.navigate(['home']);
  }

}
