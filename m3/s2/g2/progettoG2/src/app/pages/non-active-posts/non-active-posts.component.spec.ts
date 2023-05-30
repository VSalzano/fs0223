import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonActivePostsComponent } from './non-active-posts.component';

describe('NonActivePostsComponent', () => {
  let component: NonActivePostsComponent;
  let fixture: ComponentFixture<NonActivePostsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NonActivePostsComponent]
    });
    fixture = TestBed.createComponent(NonActivePostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
