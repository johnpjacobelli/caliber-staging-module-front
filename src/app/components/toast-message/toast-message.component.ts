import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'app-toast-message',
  templateUrl: './toast-message.component.html',
  styleUrls: ['./toast-message.component.css']
})
export class ToastMessageComponent implements OnInit {
  message: String;
  buttonId: String;
  
  constructor() { }

  ngOnInit(): void {
  }

  /*
  Function takes in information for which submit button was pressed create swot, update swot, or delete swot
  Function then changes the message variable to describe the action taken by the user
  */
  setToastMessage(actionDetails: any): void {
    // new swot message
    if(actionDetails == "create") {
    this.message = "Success! New SWOT item has been added.";
    this.buttonId = '#createButton';
    // this.setTimeVisible();
    }
    //update message
    else if(actionDetails == "update") {
    this.message = "Success! SWOT item has been updated.";
    this.buttonId = '#addButton';
    // this.setTimeVisible();
    }
    // delete message -> see delete method in view-swot component
    else if(actionDetails == "delete") {
    this.message =  "";
    this.buttonId = 'deleteButton';
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
    //$(document).ready(function(){
      //$(this.buttonId).click(function(){
        $('.toast').toast({delay: 10000});
        $('.toast').toast('show');
      //});
   // });
  }

}
