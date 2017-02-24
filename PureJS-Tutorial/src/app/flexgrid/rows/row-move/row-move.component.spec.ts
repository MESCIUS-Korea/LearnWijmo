/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RowMoveComponent } from './row-move.component';

describe('RowMoveComponent', () => {
  let component: RowMoveComponent;
  let fixture: ComponentFixture<RowMoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RowMoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RowMoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
