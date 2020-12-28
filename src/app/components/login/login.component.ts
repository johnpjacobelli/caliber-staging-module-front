import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0}),
        animate(2000, style({ opacity: 1}))
      ])
    ])
  ]
})

export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
