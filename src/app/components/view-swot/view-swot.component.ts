import { UpdateItemComponent } from './../update-item/update-item.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SwotItem } from './../../models/swot-model/swot-item';
import { SwotService } from 'src/app/services/swot/swot.service';
import { Component, OnInit } from '@angular/core';
import { Swot } from 'src/app/models/swot-model/swot';
import { Router } from '@angular/router';


@Component({
  selector: 'app-view-swot',
  templateUrl: './view-swot.component.html',
  styleUrls: ['./view-swot.component.css']
})
export class ViewSwotComponent implements OnInit {

  swotAnalyses : Swot[] = [];
  index : number = 0;
  currentSwotAnalysis : Swot;

  constructor(private swotService: SwotService, 
              private router : Router,
              private modalService: NgbModal) { }
  

  ngOnInit(): void {

    this.swotService.getSwotByAssociatedId(1)
    .subscribe((data:any)=>{
      console.log(data);

      this.swotAnalyses = data;
    })
  }

  openUpdatePage(swotItem: SwotItem, swotAnalysisId: number){
    swotItem.swotAnalysisId = swotAnalysisId;
    const modalRef = this.modalService.open(UpdateItemComponent);
    modalRef.componentInstance.name = 'UpdateSwot';
  }

  open() {
    const modalRef = this.modalService.open(UpdateItemComponent);
    modalRef.componentInstance.name = 'UpdateSwot'; 
  }
}
