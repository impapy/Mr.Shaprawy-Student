import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionVidoesComponent } from './solution-vidoes.component';

describe('SolutionVidoesComponent', () => {
  let component: SolutionVidoesComponent;
  let fixture: ComponentFixture<SolutionVidoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolutionVidoesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionVidoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
