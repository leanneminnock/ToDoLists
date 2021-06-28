import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryListsComponent } from './summary-lists.component';

describe('SummaryListsComponent', () => {
  let component: SummaryListsComponent;
  let fixture: ComponentFixture<SummaryListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummaryListsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
