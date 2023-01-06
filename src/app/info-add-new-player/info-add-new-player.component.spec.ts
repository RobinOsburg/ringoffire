import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoAddNewPlayerComponent } from './info-add-new-player.component';

describe('InfoAddNewPlayerComponent', () => {
  let component: InfoAddNewPlayerComponent;
  let fixture: ComponentFixture<InfoAddNewPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoAddNewPlayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoAddNewPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
