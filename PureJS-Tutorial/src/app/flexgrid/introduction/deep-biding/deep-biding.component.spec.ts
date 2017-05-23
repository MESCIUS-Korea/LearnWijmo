/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DeepBidingComponent } from './deep-biding.component';

describe('DeepBidingComponent', () => {
  let component: DeepBidingComponent;
  let fixture: ComponentFixture<DeepBidingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeepBidingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeepBidingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
