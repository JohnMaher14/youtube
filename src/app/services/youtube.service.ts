import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  constructor(private _HttpClient:HttpClient) { }
  getYoutubeApi(id:string):Observable<any>{
    return  this._HttpClient.get(`https://www.googleapis.com/youtube/v3/videos?key=AIzaSyB1ZwG0bncr9gDQuL8TTpTiMa1E6HVHtCo&id=${id}&part=snippet,player,statistics`)
  }
  getYoutubeSavedData():Observable<any>{
    return  this._HttpClient.get(`https://digitalbondmena.com/digitalBondMobileApp/api/youtube-get-data`)
  }
  getChannelDetails(id:string):Observable<any>{
    return this._HttpClient.get(`https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${id}&key=AIzaSyB1ZwG0bncr9gDQuL8TTpTiMa1E6HVHtCo&part=statistics`)
  }
  sendYoutubeApi(data:any):Observable<any>{
    return  this._HttpClient.post(`https://digitalbondmena.com/digitalBondMobileApp/api/youtube-store-data`, data)
  }
  getFacebookApi():Observable<any>{
    return this._HttpClient.get(``);
  }
}
