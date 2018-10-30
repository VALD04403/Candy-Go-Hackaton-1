import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RulesgameComponent } from './rulesgame.component';

describe('RulesgameComponent', () => {
  let component: RulesgameComponent;
  let fixture: ComponentFixture<RulesgameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RulesgameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RulesgameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
