import { environment } from './../../../environments/environment';
import { AppRoutingModule } from './../../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire';

import { AssociateService } from './associate.service';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('AssociateService', () => {
  let service: AssociateService;
  let fb : FormBuilder;
  let httpmock: HttpTestingController;

  const UpdateBatchPayload ={
    batch_id:  2,
    associate_id: 3
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
         
        HttpClientModule,
        AngularFireModule.initializeApp(environment.firebase),
        AppRoutingModule,ReactiveFormsModule, HttpClientTestingModule,FormsModule
        
       ],
        providers: [ HttpClientModule, AngularFireModule, AppRoutingModule],
    });
    httpmock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(AssociateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  let id:number;
  //checks whether the function will get an array or be undefined.
  //id is parameter is for batch id.
  it('getAllAssociates', () => {
    expect( service.getAllAssociates(id)).toBeTruthy();
  })

  it('getAllNewAssociates', () => {
    expect(service.getAllNewAssociates(id)).toBeTruthy();
  });
  it('should call updateBatch()', ()=>{
    service.updateBatch(UpdateBatchPayload).subscribe((res) =>{

    });
    
    const req = httpmock.expectOne(`${environment.BASE_URL}associates`);
    expect(req.request.method).toBe('PUT');
    req.flush(UpdateBatchPayload );
  });
 
});
