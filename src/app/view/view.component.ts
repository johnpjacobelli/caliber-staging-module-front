
import { Component, OnInit } from '@angular/core';
import { Associate } from '../models/associate.model';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  associates:Associate[];

  constructor() { }

  ngOnInit(): void {
  }

  getAllAssociates(id:number): void {
    
  }

}
