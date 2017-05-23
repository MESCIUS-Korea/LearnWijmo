/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FgHdResizeComponent } from './fg-hd-resize.component';

describe('FgHdResizeComponent', () => {
  let component: FgHdResizeComponent;
  let fixture: ComponentFixture<FgHdResizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FgHdResizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FgHdResizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
