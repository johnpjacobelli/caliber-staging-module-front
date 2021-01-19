import { LoginService } from './login.service';
import { AppRoutingModule } from './../../app-routing.module';
import { environment } from './../../../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';


describe('LoginService', () => {
  let service: LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
         
        HttpClientModule,
        AngularFireModule.initializeApp(environment.firebase),
        AppRoutingModule
        
       ],
        providers: [ HttpClientModule, AngularFireModule, AppRoutingModule],
    });
    service = TestBed.inject(LoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
