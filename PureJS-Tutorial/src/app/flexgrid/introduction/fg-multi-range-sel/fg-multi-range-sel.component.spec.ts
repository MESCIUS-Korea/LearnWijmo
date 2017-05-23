/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FgMultiRangeSelComponent } from './fg-multi-range-sel.component';

describe('FgMultiRangeSelComponent', () => {
  let component: FgMultiRangeSelComponent;
  let fixture: ComponentFixture<FgMultiRangeSelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FgMultiRangeSelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FgMultiRangeSelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
