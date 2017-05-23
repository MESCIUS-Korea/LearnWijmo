/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CvSortingComponent } from './cv-sorting.component';

describe('CvSortingComponent', () => {
  let component: CvSortingComponent;
  let fixture: ComponentFixture<CvSortingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvSortingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvSortingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
