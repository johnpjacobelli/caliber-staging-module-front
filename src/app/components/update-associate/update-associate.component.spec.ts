import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AssociateService } from 'src/app/services/associate/associate.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'
import { UpdateAssociateComponent } from './update-associate.component';
import { UpdateBatchPayload } from '../view-associate/update-batch-payload';

describe('UpdateAssociateComponent', () => {
  let component: UpdateAssociateComponent;
  let fixture: ComponentFixture<UpdateAssociateComponent>;
  let associate_serv: AssociateService;
  let fb: FormGroup;
  let httpmock: HttpTestingController;
  let serviceSpy;
  let updatePayload: UpdateBatchPayload;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAssociateComponent ],
      imports:[ReactiveFormsModule, HttpClientTestingModule,FormsModule],
      providers :[AssociateService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAssociateComponent);
    component = fixture.componentInstance;
    associate_serv = TestBed.inject(AssociateService);

    fixture.detectChanges();
  });

  const dummyData = {
    batch_id:  2,
    associate_id: 3

  }

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call onSubmit()', () =>{
    fixture.componentInstance.updatePayload.associate_id= dummyData.associate_id;
    fixture.componentInstance.updatePayload.batch_id= dummyData.batch_id;
    // const a1 = fixture.componentInstance.formModel.amount;
    // console.log(a1);
    serviceSpy = spyOn(associate_serv, `updateBatch`);
    fixture.detectChanges();
    const button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    
    fixture.detectChanges();

    expect(serviceSpy).toHaveBeenCalled();
  });
});

//constructor(private modalService: NgbModal, private formBuild: FormBuilder, private assocService: AssociateService) { }