import { SwotComponent } from './../swot/swot.component';
import { AssociateService } from '../../services/associate/associate.service';
import { Associate } from '../../models/associate-model/associate.model';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BehaviorSubject, Observable } from 'rxjs';


@Component({
  selector: 'app-view-associate',
  templateUrl: './view-associate.component.html',
  styleUrls: ['./view-associate.component.css']
})
export class ViewAssociateComponent implements OnInit {

  associates: Associate[];
  newAssociates: Associate[];
  private associateSubject: BehaviorSubject<Associate>;
  public associate: Observable<Associate>; 
  testAssociate = new Associate(1, 'SF-1234', 'testEmail@email.com', 'test', 'tester', 14, 379, 'Training');
  activeId: number;

  constructor(private service: AssociateService, private modalService: NgbModal) { 
    this.associateSubject = new BehaviorSubject<Associate>(JSON.parse(sessionStorage.getItem('currentUser')));  
    this.associate = this.associateSubject.asObservable();
  }

  ngOnInit(): void {
    console.log(this.associateValue.email)
    this.getAllAssociates(1);
  }

  public get associateValue(): Associate {
    return this.associateSubject.value;
  }

  open() {
    const modalRef = this.modalService.open(SwotComponent);
    modalRef.componentInstance.name = 'CreateSwot';
    console.log(this.activeId);
    modalRef.componentInstance.passedId = this.activeId;
  }

  public getAllAssociates(id: number): void {
    this.service.getAllAssociates(id)
    .subscribe(
      data => {
        this.associates = data;
        console.log(this.associates);
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


