import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
//import { $ } from 'protractor';
import { ToastService } from 'src/app/services/notifications/toast.service'
import * as $ from 'jquery';

@Component({
  selector: 'app-toast-message',
  templateUrl: './toast-message.component.html',
  styleUrls: ['./toast-message.component.css']
})
export class ToastMessageComponent implements OnInit, OnDestroy {
  message: String;
  subscription: Subscription
  buttonId: String;
  
  constructor(private route: ActivatedRoute, private toastService: ToastService) { }
  
  /*
    on Init takes information from the three possible 
    methods add, update or delete and sets the appropriate message
  */
  ngOnInit(): void {
    console.log("Inside toast component");
    this.subscription = this.toastService.typeMessage.subscribe(message => this.message = message);
    this.setToastMessage(this.message);
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  /*
    DELETE ME - sample method used for testing only
  */
  testToastMessage(): void {
    this.message = "This is a sample message";
  }

  /*
  Function takes in information for which submit button was pressed create swot, update swot, or delete swot
  Function then changes the message variable to describe the action taken by the user
  */
  setToastMessage(actionDetails: any): void {
    // new swot message
    console.log("Test message set" + this.message);
    if(actionDetails == "#Create") {
    this.message = "Success! New SWOT item has been added.";
    this.buttonId = '#createButton';
    // this.setTimeVisible();
    }
    //update message
    else if(actionDetails == "#Update") {
    this.message = "Success! SWOT item has been updated.";
    this.buttonId = '#addButton';
    // this.setTimeVisible();
    }
    // delete message -> see delete method in view-swot component
    else if(actionDetails == "#Delete") {
    this.message =  "SWOT has been deleted.";
    this.buttonId = '#deleteButton';
    // this.setTimeVisible();
    }
    // Alternatively, if setTimeVisible doesn't require special information from the action there can be
    // A genereal setTimeVisible instead
    this.setTimeVisible();
  }

  /*
    Function used to set the amount of time toasts are visible before disappearing
    Also to determine how many toasts can appear on screen at once?
  */
  setTimeVisible(): void {
  //  $(document).ready(function(){
      // $(this.buttonId).click(function(){
        $('#toast').toast({delay: 10000});
        $('#toast').toast('show');
        $('.toast').toast({delay: 10000});
        $('.toast').toast('show');
        // document.getElementById("toast").toast({delay: 10000});
        // document.getElementById("toast").toast('show');
        // $(document.getElementById('#toast')).toast({delay: 10000});
        // $(document.getElementById('#toast')).toast('show');
        // $('#myToast').on('show.bs.toast', function() {
        // })

      // });
  // });
  }

}
