import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tools-carousel',
  templateUrl: './tools-carousel.component.html',
  styleUrls: ['./tools-carousel.component.scss']
})
export class ToolsCarouselComponent implements OnInit {

  public tools = [
    {name: 'AngularJs / 2+', imgPath: 'https://angular.io/assets/images/logos/angular/angular.svg'},
    {name: 'RxJs / NgRx', imgPath: 'https://rxjs-dev.firebaseapp.com/generated/images/marketing/home/Rx_Logo-512-512.png'},
    {name: '', imgPath: 'https://ngrx.io/assets/images/badge.svg'},
    {name: 'React', imgPath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1024px-React.svg.png'},
    {name: 'Redux', imgPath: 'https://avatars0.githubusercontent.com/u/13142323?s=400&v=4'},
  ]

  constructor() { }

  ngOnInit() {
  }

}
