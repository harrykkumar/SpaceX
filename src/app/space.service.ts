import { Injectable } from '@angular/core';
import { map,share, tap } from 'rxjs/operators';
import { BehaviorSubject, Subject, Observable } from 'rxjs'
import { HttpClientModule, HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SpaceService {
  Url:any
  constructor(private http:  HttpClient) {
    this.Url ='https://api.spacexdata.com/v3/launches?limit='
   }
  getData (endpointUrl:string){
    return this.http.get( this.Url+endpointUrl).pipe(share())
  }
 
  postData(path: any, params: any): Observable<any> {
    return this.http.post(path, JSON.stringify(params))
  }
  // post : two  param  string url and  input json 
  private getdataList = new Subject()
  
  sendData(data) {
    this.getdataList.next(data)
  }

  getStatus() {
    return this.getdataList.asObservable()
  }
}
