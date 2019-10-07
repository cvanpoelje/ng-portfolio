import { Component, OnInit } from '@angular/core';

interface SidebarStatus {
  left: boolean;
  right: boolean;
  main: boolean;
}

@Component({
  selector: 'app-page-layout',
  templateUrl: './page-layout.component.html',
  styleUrls: ['./page-layout.component.scss']
})
export class PageLayoutComponent implements OnInit {
  // Page Sidebar control. could eventually be build into an input.
    sidebarStatus: SidebarStatus = {
     left: false,
     right: false,
     main: false,
   };


   toggleMenu = (target: string) => {
    //  options : 'left', 'right', 'main'
     this.sidebarStatus[target] = !this.sidebarStatus[target]
   }
  constructor() { }

  ngOnInit() {
  }

}
