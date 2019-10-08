import { Component, OnInit } from "@angular/core";

interface MenuItem {
  name: string;
  path: string;
}

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"]
})
export class NavigationComponent implements OnInit {
  items: MenuItem[] = [
    { name: "Home", path: "" },
    { name: "item2", path: "item2" },
    { name: "item3", path: "item3" },
    { name: "item4", path: "" }
  ];

  constructor() {}

  ngOnInit() {}
}
