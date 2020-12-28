import { AssociateService } from './../../services/associate.service';
import { Associate } from './../../models/associate.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  associates:Associate[];
  newAssociates:Associate[];
  testAssociate = new Associate(1,"SF-1234","testEmail@email.com","test","tester",14,379,"Training");
  
  constructor(private service:AssociateService) { }
  
  ngOnInit(): void {
    this.getAllAssociates(1);
  }
  
  public getAllAssociates(id:number): void {
    this.service.getAllAssociates(id)
    .subscribe(
      data => {
        this.associates= data;
      }
      )
    }

  public getAllNewAssociates(id:number): void {
    this.service.getAllNewAssociates(id)
    .subscribe(
      data => {
        this.newAssociates=data;
      }
    )
  }
  
    
  }


