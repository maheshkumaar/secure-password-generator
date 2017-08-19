import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintResultComponent } from './print-result.component';

describe('PrintResultComponent', () => {
  let component: PrintResultComponent;
  let fixture: ComponentFixture<PrintResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
