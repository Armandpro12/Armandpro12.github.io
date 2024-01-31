import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcoursPageComponent } from './parcours-page.component';

describe('ParcoursPageComponent', () => {
  let component: ParcoursPageComponent;
  let fixture: ComponentFixture<ParcoursPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParcoursPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParcoursPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
