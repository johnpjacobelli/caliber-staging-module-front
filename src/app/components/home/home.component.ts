import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(public auth: AngularFireAuth, private router: Router) { }

  ngOnInit(): void {
    if(!sessionStorage.getItem('managerId')){
      this.router.navigate(['login']);
    } 
   }

  /**
   * This function logs out user when the logout button is clicked.
   */
  logOut() {
    sessionStorage.clear();
    this.router.navigate(['/login']);
    

    // this.auth
    //   .signOut()
    //   .then(() => 
    //   .catch((error) =>
    //     console.log(`Failed to log user out. Error => `, error)
    //   );
  }
}
