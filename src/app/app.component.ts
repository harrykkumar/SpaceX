import { Component ,OnInit} from '@angular/core';
import {SpaceService} from './space.service'
import  {Router} from '@angular/router'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

   constructor(private _spaceService: SpaceService, private router: Router){

   }
  
  ngOnInit() {
  }

  launchdata(launch){
  this._spaceService.getData('100&launch_success='+launch).subscribe(data=>{
    this._spaceService.sendData(data)
  })
}

landingdata(landing){
  let m = landing===1 ? true: false
  this._spaceService.getData('100&launch_success=true&land_success='+m).subscribe(data=>{
    this._spaceService.sendData(data)

  })
}
filterdata(year){
  this._spaceService.getData('100&launch_success=true&land_success=true&launch_year='+year).subscribe(data=>{
    this._spaceService.sendData(data)

  })
}
route(type){
  this.router.navigate(['/space', type])
}
}
