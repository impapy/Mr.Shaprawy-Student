import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeWorkVideosComponent } from './home-work-videos.component';

describe('HomeWorkVideosComponent', () => {
  let component: HomeWorkVideosComponent;
  let fixture: ComponentFixture<HomeWorkVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeWorkVideosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeWorkVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
