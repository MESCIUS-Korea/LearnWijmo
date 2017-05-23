/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RowHeightComponent } from './row-height.component';

describe('RowHeightComponent', () => {
  let component: RowHeightComponent;
  let fixture: ComponentFixture<RowHeightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RowHeightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RowHeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
