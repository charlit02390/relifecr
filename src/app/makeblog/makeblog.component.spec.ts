import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeblogComponent } from './makeblog.component';

describe('MakeblogComponent', () => {
  let component: MakeblogComponent;
  let fixture: ComponentFixture<MakeblogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeblogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
