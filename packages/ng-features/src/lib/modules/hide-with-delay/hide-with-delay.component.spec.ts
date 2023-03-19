import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HideWithDelayComponent } from './hide-with-delay.component';

describe('HideWithDelayComponent', () => {
  let component: HideWithDelayComponent;
  let fixture: ComponentFixture<HideWithDelayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HideWithDelayComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HideWithDelayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
