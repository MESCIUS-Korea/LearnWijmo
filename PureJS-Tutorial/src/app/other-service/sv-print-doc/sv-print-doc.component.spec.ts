/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SvPrintDocComponent } from './sv-print-doc.component';

describe('SvPrintDocComponent', () => {
  let component: SvPrintDocComponent;
  let fixture: ComponentFixture<SvPrintDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvPrintDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvPrintDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
