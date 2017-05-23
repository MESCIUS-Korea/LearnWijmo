/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RowStylingComponent } from './row-styling.component';

describe('RowStylingComponent', () => {
  let component: RowStylingComponent;
  let fixture: ComponentFixture<RowStylingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RowStylingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RowStylingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
