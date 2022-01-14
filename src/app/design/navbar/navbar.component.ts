import { Component, OnInit } from '@angular/core';
import { LINKS } from 'src/app/mock/enum';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public links = LINKS;

  constructor() {
    console.log("NAV :: ", this.links.Home);
  }

  ngOnInit(): void {
  }

}
