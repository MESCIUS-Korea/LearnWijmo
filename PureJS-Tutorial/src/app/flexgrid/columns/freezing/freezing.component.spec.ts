/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FreezingComponent } from './freezing.component';

describe('FreezingComponent', () => {
  let component: FreezingComponent;
  let fixture: ComponentFixture<FreezingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreezingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreezingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
