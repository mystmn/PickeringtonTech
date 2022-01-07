import { Component, OnInit } from '@angular/core';
import { AppDataService } from 'src/app/mock/app-data.service';
import { Business } from 'src/app/mock/enum';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public business = Business;

  constructor() {}

  ngOnInit(): void {}

}
