/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CvGettingStartComponent } from './cv-getting-start.component';

describe('CvGettingStartComponent', () => {
  let component: CvGettingStartComponent;
  let fixture: ComponentFixture<CvGettingStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvGettingStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvGettingStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
