import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { FeedbackService } from 'src/app/services/feedback/feedback.service';
import { Feedback } from 'src/app/models/feedback-model/feedback.model';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ResourceLoader } from '@angular/compiler';
import {AddFeedbackComponent} from 'src/app/components/add-feedback/add-feedback.component';
import { ToastRelayService } from 'src/app/services/toast-relay/toast-relay.service';

@Component({
  selector: 'app-view-feedback',
  templateUrl: './view-feedback.component.html',
  styleUrls: ['./view-feedback.component.css']
})
export class ViewFeedbackComponent implements OnInit {

  feedbackArray : Feedback [] = [];
  feedbackItem : Feedback;
  currentFeedback : Feedback;
  formIncomplete = true;
  finalCheck = false;
  contentInput = '1px solid #ced4da';
  associateId: number;

  constructor(private feedbackService: FeedbackService,
    private router: Router,
    private modalService: NgbModal,
    private route: ActivatedRoute,
    private toastService: ToastRelayService) { }

  ngOnInit(): void {
    this.pullFeedbackData();
  }

  pullFeedbackData(){
    this.associateId = +this.route.snapshot.paramMap.get('associateId')!.valueOf();
    this.feedbackService.getFeedbackByAssociateId(this.associateId)
    .subscribe((data:any)=>{
      this.feedbackArray = data;
    })
  }

  //This method requires implementation of deleteFeedback method in the 
  //feedback Service
  
  /* delete(feedbackId : number){
    this.feedbackService.deleteFeedback(feedbackId)
      .subscribe((data:any)=>{
        console.log(data);
        alert(`${data.message}`);
      })
    this.feedbackArray = this.feedbackArray.filter(feedback => feedback.id != feedbackId);
  } */

  open() {
    const modalRef = this.modalService.open(AddFeedbackComponent);
    console.log(this.associateId);
    modalRef.componentInstance.passedId = this.associateId;
  }
  
  add (itemForm: NgForm) {
    if(this.formIncomplete == true){
      this.finalCheck = true;
      if(this.feedbackItem.content.length === 0){
        this.contentInput = '2px solid red';
      }
      else{
        this.contentInput = '1px solid #ced4da';
      }
      return;
    }
    this.feedbackService.addFeedback(this.feedbackItem)
      .subscribe(data => {
        this.toastService.addToast({
          header:'New Feedback added!',
          body:`${this.feedbackItem.content}`
        });
      });
      this.modalService.dismissAll();
  }
}
