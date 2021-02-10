import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FeedbackService } from 'src/app/services/feedback/feedback.service';
import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { Feedback } from 'src/app/models/feedback-model/feedback.model';
import { NgForm } from '@angular/forms';
import { ToastRelayService } from 'src/app/services/toast-relay/toast-relay.service';
import { Manager } from 'src/app/models/manager-model/manager';


@Component({
  selector: 'app-add-feedback',
  templateUrl: './add-feedback.component.html',
  styleUrls: ['./add-feedback.component.css']
})
export class AddFeedbackComponent implements OnInit {

  feedback : Feedback;
  formIncomplete = true;
  finalCheck = false;
  contentInput = '1px solid #ced4da';
  associateId : number;
  managerId : number;
  content : string = "";
  
  
  
  date : Date;
  i : number = 0;
  hasData : boolean = false;
  @Input() passedId: number;
  //analysisItems: Array<SwotItems>;
  message : string = "";
  descBorder: string = "1px solid";
  nameBorder: string = "1px solid";
  typeBorder: string = "1px solid";

  //initililizes empty array of swot items
  //analysisItems: SwotItem[] = [];

  constructor(
    private feedbackService: FeedbackService,
    //private loginService: LoginService,
    private modalService: NgbModal,
    private toastService: ToastRelayService
  ) // private toastr: NotificationService
  {}
  ngOnInit(): void {
    this.associateId = this.passedId;
    this.managerId = parseInt(sessionStorage.getItem('managerId'));
    console.log(this.associateId);
    console.log(this.managerId);
  }

  onSubmit(itemForm: NgForm) {
    if(this.formIncomplete == true){
      this.finalCheck = true;
      if(this.content.length === 0){
        this.contentInput = '2px solid red';
      }
      else{
        this.contentInput = '1px solid #ced4da';
      }
      return;
    }

    this.feedback = new Feedback(0, this.managerId, this.content, this.associateId);
    this.feedbackService.addFeedback(this.feedback)
      .subscribe(data => {
        // alert("Success! New SWOT item has been added.")
        this.toastService.addToast({
          header:'New feedback added!',
          body:`${this.feedback.content}`
        });
      });
      this.modalService.dismissAll();
  }

/*   onSubmit2(signInForm: NgForm){
    if (this.managerId === undefined) {
      this.nameBorder = "3px solid red";
    } else {
      this.nameBorder = "1px solid";
    }
    if (this.content === "") {
      this.typeBorder = "3px solid red";
    } else {
      this.typeBorder = "1px solid";
    }

    if (this.content === "") {
      this.message = "Please enter feedback.";
    } else {
      let item : Feedback = new Feedback(0, this.managerId, this.date, this.content, this.associateId);
      this.message = "";
      //this.analysisItems.push(item);
      //console.log(this.analysisItems);
       //  this.swotService.addSwot(this.swotAnalysis)
       //    .subscribe(data => {
       //      console.log(data);
       //    });
       this.hasData = true;
    }
  }

  addSwot(): void{
    if (this.content.length === 0) {
      this.descBorder = "3px solid red";
      this.message = "Please enter feedback.";
    } else {
      this.descBorder = "1px solid";
      this.message = "";
      this.feedback = new Feedback(0, this.managerId, this.date, this.content, this.associateId);
      //console.log(this.analysisItems)
      //console.log(this.swotAnalysis)
      this.feedback.managerId = parseInt(sessionStorage.getItem('managerId'));
      this.swotService.addSwot(this.swotAnalysis)
        .subscribe(data => {
          alert(`${data.message}`);
        });
      this.modalService.dismissAll();
    }

  } */

  /* managerChange(UpdatedValue : number) :void 
  { 
    if (this.managerId !== 0) {
      this.descBorder = "1px solid";
    };
  }  */

  contentChange(UpdatedValue : string) :void 
  { 
    if (this.content.length !== 0) {
      this.nameBorder = "1px solid";
    };
  }

}
