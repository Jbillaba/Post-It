import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostitComponent } from './postit.component';

describe('PostitComponent', () => {
  let component: PostitComponent;
  let fixture: ComponentFixture<PostitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
