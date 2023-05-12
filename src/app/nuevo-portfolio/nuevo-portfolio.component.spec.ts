import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoPortfolioComponent } from './nuevo-portfolio.component';

describe('NuevoPortfolioComponent', () => {
  let component: NuevoPortfolioComponent;
  let fixture: ComponentFixture<NuevoPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoPortfolioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevoPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
