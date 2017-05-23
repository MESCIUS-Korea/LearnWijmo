/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CellMergeComponent } from './cell-merge.component';

describe('CellMergeComponent', () => {
  let component: CellMergeComponent;
  let fixture: ComponentFixture<CellMergeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CellMergeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CellMergeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
