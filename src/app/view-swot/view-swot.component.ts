import { Swot } from './../models/swot-model/swot';
import { SwotService } from 'src/app/services/swot/swot.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-swot',
  templateUrl: './view-swot.component.html',
  styleUrls: ['./view-swot.component.css']
})
export class ViewSwotComponent implements OnInit {

  swotAnalyses : Swot[] = [];
  index : number = 0;

  constructor(private swotService: SwotService) { }
  

  ngOnInit(): void {
    // this.swotService.getAllSwots()
    // .subscribe((data:SwotAnalysis[])=>{
    //   console.log(data);
    //   this.swotAnalyses = data;
    //   console.log(this.swotAnalyses)
    // })
    // this.swotService.getSwotByAssociatedId(1)
    // .subscribe((data:SwotAnalysis[])=>{
    //   console.log(data);
    //   this.swotAnalyses = data;
    //   console.log(this.swotAnalyses)
    // })
    this.swotService.getSwotByAssociatedId(1)
    .subscribe((data:any)=>{
      console.log(data);

      this.swotAnalyses = data;
    })
  }

}
