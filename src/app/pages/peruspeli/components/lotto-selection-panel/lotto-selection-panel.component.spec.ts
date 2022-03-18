import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LottoSelectionPanelComponent } from './lotto-selection-panel.component';

describe('LottoSelectionPanelComponent', () => {
  let component: LottoSelectionPanelComponent;
  let fixture: ComponentFixture<LottoSelectionPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LottoSelectionPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LottoSelectionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
