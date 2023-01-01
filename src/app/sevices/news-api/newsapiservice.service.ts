import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiserviceService {

  constructor(private _client: HttpClient) { }

  apikey: string = "d31f2c121b5c45a0b1fba48b55ffd8f9";

  // news api url
  newsApiUrl: string = `https://newsapi.org/v2/top-headlines?country=us&pageSize=100&apiKey=${this.apikey}`;

  // tech news api url
  technewsapiurl: string = `https://newsapi.org/v2/top-headlines?country=us&category=technology&pageSize=100&apiKey=${this.apikey}`;

  // bussiness news api url
  bussinessapiurl: string = `https://newsapi.org/v2/top-headlines?country=us&category=business&pageSize=100&apiKey=${this.apikey}`;

  // entertainment news api url
  entertainmentapiurl: string = `https://newsapi.org/v2/top-headlines?country=us&category=entertainment&pageSize=100&apiKey=${this.apikey}`;

  topHeading(): Observable<any>
  {
    return this._client.get(this.newsApiUrl);
  }

  techNews(): Observable<any> {
    return this._client.get(this.technewsapiurl);
  }

  bussinessNews(): Observable<any> {
    return this._client.get(this.bussinessapiurl);
  }
}
