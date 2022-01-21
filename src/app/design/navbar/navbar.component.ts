import { Component, OnInit } from '@angular/core';
import { BUSINESSLIST } from 'src/app/mock/enum';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public pages = BUSINESSLIST
  public page_route: any
  public combined_links = [] as any
  public textBob: string[] = ["Test Bob"]

  constructor(){
    // "href='{}'>{}"
    
    // let payload = [...this.pages.name, ...this.pages.route] // spread operator
    // console.log("T :: " + this.pages)
    this.combined_links = this.pages.map(v =>{
      return {url: v.link, name: v.name}
    });

    console.log(this.combined_links)
    
    // this.pages.forEach((v) => {
    //   this.combined_links.push("href=\""+ v +"\">") 
    //   console.log(this.combined_links)
    // });
  }

  ngOnInit(): void {}
}
