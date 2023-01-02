import { Component, OnInit } from '@angular/core';
import { NewsapiserviceService } from '../../sevices/news-api/newsapiservice.service';

@Component({
  selector: 'app-sciencenews',
  templateUrl: './sciencenews.component.html',
  styleUrls: ['./sciencenews.component.css']
})
export class SciencenewsComponent implements OnInit {

  constructor(private newsapi: NewsapiserviceService) { }

  news: any[] = [];

  ngOnInit(): void {
    this.newsapi.scienceNews().subscribe((rs) => {
      this.news = rs.articles;
    });
  }

}
