/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SvCustomGlyphsComponent } from './sv-custom-glyphs.component';

describe('SvCustomGlyphsComponent', () => {
  let component: SvCustomGlyphsComponent;
  let fixture: ComponentFixture<SvCustomGlyphsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvCustomGlyphsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvCustomGlyphsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
