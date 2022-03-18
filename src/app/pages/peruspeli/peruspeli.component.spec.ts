import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeruspeliComponent } from './peruspeli.component';

describe('PeruspeliComponent', () => {
  let component: PeruspeliComponent;
  let fixture: ComponentFixture<PeruspeliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeruspeliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeruspeliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
