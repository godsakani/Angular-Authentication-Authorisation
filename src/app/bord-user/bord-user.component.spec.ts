import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BordUserComponent } from './bord-user.component';

describe('BordUserComponent', () => {
  let component: BordUserComponent;
  let fixture: ComponentFixture<BordUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BordUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BordUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
