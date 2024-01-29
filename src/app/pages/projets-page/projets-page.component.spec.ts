import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetsPageComponent } from './projets-page.component';

describe('ProjetsPageComponent', () => {
  let component: ProjetsPageComponent;
  let fixture: ComponentFixture<ProjetsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjetsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjetsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
