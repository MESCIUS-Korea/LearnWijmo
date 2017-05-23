/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DyanmicDatamapComponent } from './dyanmic-datamap.component';

describe('DyanmicDatamapComponent', () => {
  let component: DyanmicDatamapComponent;
  let fixture: ComponentFixture<DyanmicDatamapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DyanmicDatamapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DyanmicDatamapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
