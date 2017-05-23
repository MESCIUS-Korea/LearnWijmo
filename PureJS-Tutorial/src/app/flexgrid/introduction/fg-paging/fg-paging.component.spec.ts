/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FgPagingComponent } from './fg-paging.component';

describe('FgPagingComponent', () => {
  let component: FgPagingComponent;
  let fixture: ComponentFixture<FgPagingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FgPagingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FgPagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
