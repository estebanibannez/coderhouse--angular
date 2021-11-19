import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameDayComponent } from './game-day.component';

describe('GameDayComponent', () => {
  let component: GameDayComponent;
  let fixture: ComponentFixture<GameDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameDayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
