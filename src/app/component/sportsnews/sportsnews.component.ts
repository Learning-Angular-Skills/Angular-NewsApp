import { Component, OnInit } from '@angular/core';
import { NewsapiserviceService } from '../../sevices/news-api/newsapiservice.service';

@Component({
  selector: 'app-sportsnews',
  templateUrl: './sportsnews.component.html',
  styleUrls: ['./sportsnews.component.css']
})
export class SportsnewsComponent implements OnInit {

  constructor(private newsapi: NewsapiserviceService) { }

  news: any[] = [];

  ngOnInit(): void {
    this.newsapi.sportsNews().subscribe((rs) => {
      this.news = rs.articles;
    });
  }

}
