import { Component, OnInit } from '@angular/core';
import {SpaceService} from '../space.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _spaceService: SpaceService){
    this._spaceService.getStatus().subscribe(list=>{
      this.listData =list
    })
  }
  launchYearList:any
 ngOnInit() {
   this.getAllListData()
 }
 listData:any
 getAllListData(){
   this._spaceService.getData('100').subscribe(data=>{
     this.listData = data 
   })
 }
 
 
}
