import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGameDayComponent } from './card-game-day.component';

describe('CardGameDayComponent', () => {
  let component: CardGameDayComponent;
  let fixture: ComponentFixture<CardGameDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardGameDayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardGameDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
