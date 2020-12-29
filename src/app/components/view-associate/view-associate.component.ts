import { SwotComponent } from './../swot/swot.component';
import { AssociateService } from '../../services/associate/associate.service';
import { Associate } from '../../models/associate-model/associate.model';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-view-associate',
  templateUrl: './view-associate.component.html',
  styleUrls: ['./view-associate.component.css']
})
export class ViewAssociateComponent implements OnInit {

  associates: Associate[];
  newAssociates: Associate[];
  testAssociate = new Associate(1, 'SF-1234', 'testEmail@email.com', 'test', 'tester', 14, 379, 'Training');

  constructor(private service: AssociateService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getAllAssociates(1);
  }

  open() {
    const modalRef = this.modalService.open(SwotComponent);
    modalRef.componentInstance.name = 'CreateSwot';
  }

  public getAllAssociates(id: number): void {
    this.service.getAllAssociates(id)
    .subscribe(
      data => {
        this.associates = data;
      }
      );
    }

  public getAllNewAssociates(id: number): void {
    this.service.getAllNewAssociates(id)
    .subscribe(
      data => {
        this.newAssociates = data;
      }
    );
  }
  }


