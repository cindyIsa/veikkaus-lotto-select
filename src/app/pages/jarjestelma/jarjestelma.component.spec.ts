import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JarjestelmaComponent } from './jarjestelma.component';

describe('JarjestelmaComponent', () => {
  let component: JarjestelmaComponent;
  let fixture: ComponentFixture<JarjestelmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JarjestelmaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JarjestelmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
