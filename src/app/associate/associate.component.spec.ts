import { Associate } from './../associate.model';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociateComponent } from './associate.component';

describe('AssociateComponent', () => {
  let component: AssociateComponent;
  let fixture: ComponentFixture<AssociateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssociateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('getAssociates', () => {

  let component: AssociateComponent;
  let id:number;

  //checks whether the function will get an array or be undefined.
  //id is parameter is for batch id.
  it('getAllAssociates', () => {
    expect(component.getAllAssociates(id)).toBeTruthy();
  })

  it('getAllNewAssociates', () => {
    expect(component.getAllNewAssociates()).toBeTruthy();
  })

})
