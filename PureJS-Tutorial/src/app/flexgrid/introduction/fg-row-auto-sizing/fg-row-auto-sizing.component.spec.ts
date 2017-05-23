/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FgRowAutoSizingComponent } from './fg-row-auto-sizing.component';

describe('FgRowAutoSizingComponent', () => {
  let component: FgRowAutoSizingComponent;
  let fixture: ComponentFixture<FgRowAutoSizingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FgRowAutoSizingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FgRowAutoSizingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
