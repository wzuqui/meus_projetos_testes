import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BancoOfflineComponent } from './banco-offline.component';

describe('BancoOfflineComponent', () => {
  let component: BancoOfflineComponent;
  let fixture: ComponentFixture<BancoOfflineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BancoOfflineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BancoOfflineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
