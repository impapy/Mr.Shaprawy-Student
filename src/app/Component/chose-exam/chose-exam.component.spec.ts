import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoseExamComponent } from './chose-exam.component';

describe('ChoseExamComponent', () => {
  let component: ChoseExamComponent;
  let fixture: ComponentFixture<ChoseExamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoseExamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoseExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
