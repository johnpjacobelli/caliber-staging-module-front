import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, Input, OnInit } from '@angular/core';
import { Swot } from 'src/app/models/swot-model/swot';
import { SwotService } from 'src/app/services/swot/swot.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-update-swot',
  templateUrl: './update-swot.component.html',
  styleUrls: ['./update-swot.component.css']
})
export class UpdateSwotComponent implements OnInit{
  updateForm: FormGroup;
  @Input() parentSwot : Swot;

  constructor(private swotService : SwotService, 
    private formBuild: FormBuilder,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    this.updateForm = this.formBuild.group({
      inputedDescription: ['', [Validators.required]]
    })
  }

  onSubmit() { 
    this.parentSwot.description = this.updateForm.get('inputedDescription')?.value;
    this.swotService.addSwot(this.parentSwot).subscribe((data: any) => {
      console.log(data);
    });
    location.reload();
  }
}
