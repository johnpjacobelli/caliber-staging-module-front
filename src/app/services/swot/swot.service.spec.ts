import { AppRoutingModule } from './../../app-routing.module';
import { environment } from './../../../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire';
import { of } from 'rxjs';
import { ignoreElements } from 'rxjs/operators';

import { SwotService } from './swot.service';

describe('SwotService', () => {
  let service: SwotService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ 
        HttpClientModule,
        AngularFireModule.initializeApp(environment.firebase),
        AppRoutingModule
       ],
        providers: [ HttpClientModule, AngularFireModule, AppRoutingModule],
    });
    service = TestBed.inject(SwotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  //Needs a valid id number
  //1 is a placeholder
  it('getswot', ()=>{
    expect(service.getSwotByAssociatedId(1)).toBeTruthy;
  })

  //This test needs checking. I do not understand spyon mock test much.
  // let test:string = "testing";
  // let spy:any = spyOn(service, 'addSwot').and.returnValue(of(test));
  // it("addSwot", () => {
  //   expect(spy).toBe("testing");
  // })

});
