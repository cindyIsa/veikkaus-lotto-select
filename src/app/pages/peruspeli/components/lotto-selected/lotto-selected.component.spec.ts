import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LottoSelectedComponent } from './lotto-selected.component';

describe('LottoSelectedComponent', () => {
  let component: LottoSelectedComponent;
  let fixture: ComponentFixture<LottoSelectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LottoSelectedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LottoSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
