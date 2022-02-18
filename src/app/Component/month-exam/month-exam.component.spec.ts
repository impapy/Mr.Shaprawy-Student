import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthExamComponent } from './month-exam.component';

describe('MonthExamComponent', () => {
  let component: MonthExamComponent;
  let fixture: ComponentFixture<MonthExamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthExamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
