import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeafletDecodeComponent } from './leaflet-decode.component';

describe('LeafletDecodeComponent', () => {
  let component: LeafletDecodeComponent;
  let fixture: ComponentFixture<LeafletDecodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeafletDecodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeafletDecodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
