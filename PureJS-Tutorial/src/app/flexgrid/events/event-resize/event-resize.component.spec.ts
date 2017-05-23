/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EventResizeComponent } from './event-resize.component';

describe('EventResizeComponent', () => {
  let component: EventResizeComponent;
  let fixture: ComponentFixture<EventResizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventResizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventResizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
