import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, Input, OnInit } from '@angular/core';
import { Swot } from 'src/app/models/swot-model/swot';
import { ActivatedRoute } from '@angular/router';
import { SwotService } from 'src/app/services/swot/swot.service';


@Component({
  selector: 'app-update-swot',
  templateUrl: './update-swot.component.html',
  styleUrls: ['./update-swot.component.css']
})
export class UpdateSwotComponent implements OnInit{

  swot : Swot = new Swot();
  @Input() parentSwot : Swot;

  constructor(private swotService : SwotService, 
    private modalService: NgbModal) { }

  ngOnInit(): void {
    this.swot = this.parentSwot;
  }

  onSubmit() { 
    console.log("we submitted ")
    console.log("we submitted ")
    console.log("we submitted ")
    console.log("we submitted ")
    console.log("we submitted ")
    console.log("we submitted ")
    console.log("we submitted ")
    console.log("we submitted ")
    console.log("we submitted ")
    console.log("we submitted ")
    console.log("we submitted ")
    console.log("we submitted ")
    console.log("we submitted ")
    console.log("we submitted ");
    // this.swot.description = "new name";
    // this.swotService.addSwot(this.swot)
    //   .subscribe(data => {
    //     alert("Success! SWOT hopefully has been updated.")
    //   });
    // this.modalService.dismissAll();
  }
}
