import { environment } from './../../../environments/environment';
import { AppRoutingModule } from './../../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire';

import { SwotComponent } from './swot.component';
import { FormsModule, NgForm } from '@angular/forms';

describe('SwotComponent', () => {
  let component: SwotComponent;
  let fixture: ComponentFixture<SwotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ 
        HttpClientModule,
        AngularFireModule.initializeApp(environment.firebase),
        AppRoutingModule,
        FormsModule
       ],
        providers: [ HttpClientModule, AngularFireModule, AppRoutingModule],
      declarations: [ SwotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
