import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LottoItemComponent } from './lotto-item.component';

describe('LottoItemComponent', () => {
  let component: LottoItemComponent;
  let fixture: ComponentFixture<LottoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LottoItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LottoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
