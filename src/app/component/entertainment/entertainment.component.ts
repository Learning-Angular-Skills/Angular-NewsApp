import { Component, OnInit } from '@angular/core';
import { NewsapiserviceService } from '../../sevices/news-api/newsapiservice.service';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent implements OnInit {

  constructor(private newsapi: NewsapiserviceService) { }

  news: any[] = [];

  ngOnInit(): void {
    this.newsapi.entertainmentNews().subscribe((rs) => {
      this.news = rs.articles;
    });
  }

}
