import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentBlurbComponent } from './content-blurb.component';

describe('ContentBlurbComponent', () => {
  let component: ContentBlurbComponent;
  let fixture: ComponentFixture<ContentBlurbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentBlurbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentBlurbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
