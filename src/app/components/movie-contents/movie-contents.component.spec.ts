import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieContentsComponent } from './movie-contents.component';

describe('MovieContentsComponent', () => {
  let component: MovieContentsComponent;
  let fixture: ComponentFixture<MovieContentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieContentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovieContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
