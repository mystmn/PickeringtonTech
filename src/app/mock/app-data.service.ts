import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppDataService {

  private data: any = {};

  setOption(option:any, value:any){
    this.data[option] = value;
  }

  getOption(){
    return this.data;
  }

  constructor() {}
}
