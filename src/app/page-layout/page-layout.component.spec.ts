import { ToolsCarouselComponent } from './../tools-carousel/tools-carousel.component';
import { HeaderComponent } from './../header/header.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLayoutComponent } from './page-layout.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('PageLayoutComponent', () => {
  let component: PageLayoutComponent;
  let fixture: ComponentFixture<PageLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PageLayoutComponent,
        HeaderComponent,
        NavigationComponent,
        ToolsCarouselComponent,

      ],
       imports: [
         RouterTestingModule
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
