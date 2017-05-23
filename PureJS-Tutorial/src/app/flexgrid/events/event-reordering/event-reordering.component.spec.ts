/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EventReorderingComponent } from './event-reordering.component';

describe('EventReorderingComponent', () => {
  let component: EventReorderingComponent;
  let fixture: ComponentFixture<EventReorderingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventReorderingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventReorderingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
