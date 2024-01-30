import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollTopButtonFeatureComponent } from './scroll-top-button-feature.component';

describe('ScrollTopButtonFeatureComponent', () => {
  let component: ScrollTopButtonFeatureComponent;
  let fixture: ComponentFixture<ScrollTopButtonFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollTopButtonFeatureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScrollTopButtonFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
