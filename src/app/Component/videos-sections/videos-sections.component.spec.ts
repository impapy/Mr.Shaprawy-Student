import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosSectionsComponent } from './videos-sections.component';

describe('VideosSectionsComponent', () => {
  let component: VideosSectionsComponent;
  let fixture: ComponentFixture<VideosSectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideosSectionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideosSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
