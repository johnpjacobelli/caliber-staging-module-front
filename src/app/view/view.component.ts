import { AssociateService } from './../services/associate.service';
import { Component, OnInit } from '@angular/core';
import { Associate } from '../models/associate.model';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  associates:Associate[];
  service:AssociateService;

  constructor(private associateService:AssociateService) { }

  ngOnInit(): void {
  }

  public getAllAssociates(id:number): void {
    this.service.getAllAssociates(id)
    .subscribe(
      data => {
        this.associates=data;
      }
    )
  }
  
    
  }


