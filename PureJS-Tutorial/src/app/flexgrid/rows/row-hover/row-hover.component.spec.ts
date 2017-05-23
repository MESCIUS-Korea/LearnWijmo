/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RowHoverComponent } from './row-hover.component';

describe('RowHoverComponent', () => {
  let component: RowHoverComponent;
  let fixture: ComponentFixture<RowHoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RowHoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RowHoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
