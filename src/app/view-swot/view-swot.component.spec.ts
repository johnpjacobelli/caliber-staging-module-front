import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSwotComponent } from './view-swot.component';

describe('ViewSwotComponent', () => {
  let component: ViewSwotComponent;
  let fixture: ComponentFixture<ViewSwotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSwotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSwotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
