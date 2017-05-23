/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SvColorComponent } from './sv-color.component';

describe('SvColorComponent', () => {
  let component: SvColorComponent;
  let fixture: ComponentFixture<SvColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
