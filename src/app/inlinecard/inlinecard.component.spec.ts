import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlinecardComponent } from './inlinecard.component';

describe('InlinecardComponent', () => {
  let component: InlinecardComponent;
  let fixture: ComponentFixture<InlinecardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InlinecardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InlinecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
