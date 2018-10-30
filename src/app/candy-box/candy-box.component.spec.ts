import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandyBoxComponent } from './candy-box.component';

describe('CandyBoxComponent', () => {
  let component: CandyBoxComponent;
  let fixture: ComponentFixture<CandyBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandyBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandyBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
