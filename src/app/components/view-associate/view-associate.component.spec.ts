import { AppRoutingModule } from './../../app-routing.module';
import { environment } from './../../../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire';

import { ViewAssociateComponent } from './view-associate.component';

describe('ViewAssociateComponent', () => {
  let component: ViewAssociateComponent;
  let fixture: ComponentFixture<ViewAssociateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ 
      imports: [ 
      HttpClientModule,
      AngularFireModule.initializeApp(environment.firebase),
      AppRoutingModule
     ],
      providers: [ HttpClientModule, AngularFireModule, AppRoutingModule],
      declarations: [ ViewAssociateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAssociateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
