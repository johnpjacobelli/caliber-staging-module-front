import { Component, OnInit } from '@angular/core';
import { Swot } from 'src/app/models/swot-model/swot';
import { SwotItem } from 'src/app/models/swot-model/swot-item';
import { ActivatedRoute } from '@angular/router';
import { SwotService } from 'src/app/services/swot/swot.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.css']
})
export class UpdateItemComponent implements OnInit {

  swot : Swot = new Swot();
  swotItem : SwotItem = new SwotItem(0,"","");
  myImage: string = "assets/img/swot1.png";
  constructor(private route: ActivatedRoute,
    private swotService: SwotService) { }
  ngOnInit(): void {
    this.getSwotItem();
  }

  // This function looks like it could be removed, I don't know if any part of this is in use.
  getSwotItem(): void {
    // const id = +this.route.snapshot.paramMap.get('id')!.valueOf();
    // const content =+ this.route.snapshot.paramMap.get('content')!;
    // const type =+ this.route.snapshot.paramMap.get('type')!;
    // console.log(id);
    // console.log(content);
    // console.log(type);

   console.log("Hi");

    // this.swotItem = JSON.parse(this.route.snapshot.params["swotItem"]);
    // console.log(this.swotItem);


      // this.route.queryParams.subscribe(params => {
      //       let id = params[0];
      //       let content = params[1];
      //       let type = params[2];
      //       console.log(id); // Print the parameter to the console. 
      //       console.log(content);
      //       console.log(type);
      //   });
    
    
  //  this.swotService.getItem(id)
  //  .subscribe((data:SwotItem)=>{
  //    console.log(data);
  //    this.swotItem = data;
  //    //this.task.taskStatus = "";
  //  })
 }
  onSubmit(itemForm: NgForm) {
    console.log(itemForm)
    console.log(itemForm.value)
    console.log(this.swotItem)
    this.swotService.updateItem(this.swotItem)
      .subscribe(data => {
        console.log(data);
      });
  }

}
