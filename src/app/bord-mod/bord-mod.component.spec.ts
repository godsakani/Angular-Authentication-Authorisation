import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BordModComponent } from './bord-mod.component';

describe('BordModComponent', () => {
  let component: BordModComponent;
  let fixture: ComponentFixture<BordModComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BordModComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BordModComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
