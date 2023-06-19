import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsLetterComponent } from './news-letter.component';

describe('NewsLetterComponent', () => {
  let component: NewsLetterComponent;
  let fixture: ComponentFixture<NewsLetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsLetterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
