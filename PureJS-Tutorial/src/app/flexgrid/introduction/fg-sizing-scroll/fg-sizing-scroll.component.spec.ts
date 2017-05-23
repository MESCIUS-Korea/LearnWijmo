/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FgSizingScrollComponent } from './fg-sizing-scroll.component';

describe('FgSizingScrollComponent', () => {
  let component: FgSizingScrollComponent;
  let fixture: ComponentFixture<FgSizingScrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FgSizingScrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FgSizingScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
