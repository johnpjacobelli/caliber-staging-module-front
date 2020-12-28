import { AssociateService } from './../../services/associate/associate.service';
import { Component, OnInit } from '@angular/core';

import { Associate } from '../../models/associate-model/associate.model';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  associates: Associate[];


  constructor(private associateService: AssociateService) { }

  ngOnInit(): void {
  }

  getAllAssociates(id:number): void {
    this.associateService.getAllAssociates(id).subscribe(
      data => {this.associates = data;}
    )

  }

}
