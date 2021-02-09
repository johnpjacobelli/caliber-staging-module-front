import { environment } from './../../../environments/environment';
import { AppRoutingModule } from './../../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire';

import { SwotComponent } from './swot.component';
import { FormsModule, NgForm } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { SwotService } from 'src/app/services/swot/swot.service';

describe('SwotComponent', () => {
  class MockService {
    addSwot() {return mockClient.get()}
  }
  
  let component: SwotComponent;
  let fixture: ComponentFixture<SwotComponent>;
  let swotService: SwotService;
  let mockClient: {get: jasmine.Spy, post: jasmine.Spy, put: jasmine.Spy, delete: jasmine.Spy}

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ 
        HttpClientModule,
        AngularFireModule.initializeApp(environment.firebase),
        AppRoutingModule,
        FormsModule
       ],
        providers: [ HttpClientModule, AngularFireModule, AppRoutingModule,
           {provide: SwotService, useClass:MockService}],
      declarations: [ SwotComponent ]
    })
    .compileComponents();
    swotService = TestBed.inject(SwotService);

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a message if name is not entered and add item is clicked', waitForAsync(()=> {
    let addItemButton = fixture.debugElement.query(By.css('#additembutton')).nativeElement;
    addItemButton.click();
    let message = fixture.debugElement.query(By.css('#message')).nativeElement;
    fixture.detectChanges();
    fixture.whenStable().then(()=> {
      expect(message.innerHTML).toBe('Please enter SWOT item name.');
    });
  }));

  it('should display a message if type is not selected and add item is clicked', waitForAsync(()=> {
    component.name = "something";
    let addItemButton = fixture.debugElement.query(By.css('#additembutton')).nativeElement;
    addItemButton.click();
    let message = fixture.debugElement.query(By.css('#message')).nativeElement;
    fixture.detectChanges();
    fixture.whenStable().then(()=> {
      expect(message.innerHTML).toBe('Please select a SWOT type.');
    });
  }));

  it('should display a message if description is not entered and add item is clicked', waitForAsync(()=> {
    component.name = "something";
    component.type = "STRENGTH";
    let addItemButton = fixture.debugElement.query(By.css('#additembutton')).nativeElement;
    addItemButton.click();
    fixture.detectChanges();
    let addSwotButton = fixture.debugElement.query(By.css('#submitbutton')).nativeElement;
    addSwotButton.click();
    fixture.detectChanges();
    let message = fixture.debugElement.query(By.css('#message')).nativeElement;
    fixture.whenStable().then(()=> {
      expect(message.innerHTML).toBe('Please enter SWOT title.');
    });
  }));

  it('should call the add swot method when submit button is clicked', waitForAsync(()=> {
    let addSwotSpy = spyOn(swotService, 'addSwot').and.callThrough();
    component.name = "something";
    component.type = "STRENGTH";
    component.description = "something";
    let addItemButton = fixture.debugElement.query(By.css('#additembutton')).nativeElement;
    addItemButton.click();
    fixture.detectChanges();
    let addSwotButton = fixture.debugElement.query(By.css('#submitbutton')).nativeElement;
    addSwotButton.click();
    fixture.detectChanges();
    fixture.whenStable().then(()=> {
      expect(addSwotSpy).toHaveBeenCalledTimes(1);
    });
  }));

});
