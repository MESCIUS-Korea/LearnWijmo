/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FgScrollingViewrangeComponent } from './fg-scrolling-viewrange.component';

describe('FgScrollingViewrangeComponent', () => {
  let component: FgScrollingViewrangeComponent;
  let fixture: ComponentFixture<FgScrollingViewrangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FgScrollingViewrangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FgScrollingViewrangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
