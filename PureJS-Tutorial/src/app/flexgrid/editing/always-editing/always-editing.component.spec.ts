/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AlwaysEditingComponent } from './always-editing.component';

describe('AlwaysEditingComponent', () => {
  let component: AlwaysEditingComponent;
  let fixture: ComponentFixture<AlwaysEditingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlwaysEditingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlwaysEditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
