import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsCarouselComponent } from './tools-carousel.component';

describe('ToolsCarouselComponent', () => {
  let component: ToolsCarouselComponent;
  let fixture: ComponentFixture<ToolsCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolsCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolsCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
