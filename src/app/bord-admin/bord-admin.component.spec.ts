import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BordAdminComponent } from './bord-admin.component';

describe('BordAdminComponent', () => {
  let component: BordAdminComponent;
  let fixture: ComponentFixture<BordAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BordAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BordAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
