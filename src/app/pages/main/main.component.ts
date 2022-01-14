import { Component, OnInit } from '@angular/core';
import { BUSINESSLIST } from 'src/app/mock/enum';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public business = BUSINESSLIST;

  constructor() {}

  ngOnInit(): void {}

}
