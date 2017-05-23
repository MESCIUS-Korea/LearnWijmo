/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EventMouseComponent } from './event-mouse.component';

describe('EventMouseComponent', () => {
  let component: EventMouseComponent;
  let fixture: ComponentFixture<EventMouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventMouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventMouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
