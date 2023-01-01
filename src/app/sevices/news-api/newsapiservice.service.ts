import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiserviceService {

  constructor(private _client: HttpClient) { }

  apikey: string = "d31f2c121b5c45a0b1fba48b55ffd8f9";
  newsApiUrl: string = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${this.apikey}`;

  topHeading(): Observable<any>
  {
    return this._client.get(this.newsApiUrl);
  }
}
