import { TestBed } from '@angular/core/testing';
import { AssociateService } from './associate.service';

describe('AssociateService', () => {
  let service: AssociateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssociateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

describe('getAssociates', () => {

  let component: AssociateService;
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