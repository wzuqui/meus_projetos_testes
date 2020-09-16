import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoterizadorComponent } from './roterizador.component';

describe('RoterizadorComponent', () => {
  let component: RoterizadorComponent;
  let fixture: ComponentFixture<RoterizadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoterizadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoterizadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
