import { SwotItem } from './../../models/swot-model/swot-item';
import { Swot } from './../../models/swot-model/swot';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { SwotService } from 'src/app/services/swot/swot.service';
@Component({
  selector: 'app-swot',
  templateUrl: './swot.component.html',
  styleUrls: ['./swot.component.css']
})
export class SwotComponent implements OnInit {
  myImage: string = "assets/img/swot1.png";
  swotAnalysis = new Swot();
  content : string;
  type : string = "";
  associateId : number;
  i : number = 0;
  //analysisItems: Array<SwotItems>;

  //initililizes empty array of swot items
  analysisItems : SwotItem[] = [];

  constructor(private swotService: SwotService) { }
  ngOnInit(): void {
  }

  //collects data from form and creates item array in the user's view (PUSH METHOD)
  onSubmit(signInForm: NgForm){
   let item : SwotItem = new SwotItem(0, this.content, this.type);
   this.analysisItems.push(item);
   console.log(this.analysisItems);
    //  this.swotService.addSwot(this.swotAnalysis)
    //    .subscribe(data => {
    //      console.log(data);
    //    });
  }
  
  //deletes the item from the item array in the user's view on delete click(FILTER METHOD)
  delete(item: SwotItem): void {
    this.analysisItems = this.analysisItems.filter(swotItem => swotItem !== item);  // this is so the component maintains its own
  }


  addSwot(): void{
    console.log("add swot")
    console.log(this.analysisItems)
    this.swotAnalysis.analysisItems = this.analysisItems;
    console.log(this.analysisItems)
    console.log(this.swotAnalysis)
     this.swotService.addSwot(this.swotAnalysis)
       .subscribe(data => {
         console.log(data);
       });
  }
}