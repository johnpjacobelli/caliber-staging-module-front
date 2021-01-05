import { environment } from './../../../environments/environment';
import { AppRoutingModule } from './../../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire';

import { AssociateService } from './associate.service';

describe('AssociateService', () => {
  let service: AssociateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
         
        HttpClientModule,
        AngularFireModule.initializeApp(environment.firebase),
        AppRoutingModule
        
       ],
        providers: [ HttpClientModule, AngularFireModule, AppRoutingModule],
    });
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
});
