import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PDFGenerationComponent } from './pdfgeneration.component';

describe('PDFGenerationComponent', () => {
  let component: PDFGenerationComponent;
  let fixture: ComponentFixture<PDFGenerationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PDFGenerationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PDFGenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
