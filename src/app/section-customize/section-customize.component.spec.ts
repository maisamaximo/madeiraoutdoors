import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionCustomizeComponent } from './section-customize.component';

describe('SectionCustomizeComponent', () => {
  let component: SectionCustomizeComponent;
  let fixture: ComponentFixture<SectionCustomizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionCustomizeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectionCustomizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
