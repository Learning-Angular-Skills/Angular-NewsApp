import { Component, OnInit } from '@angular/core';
import { NewsapiserviceService } from '../../sevices/news-api/newsapiservice.service';

@Component({
  selector: 'app-bussinessnews',
  templateUrl: './bussinessnews.component.html',
  styleUrls: ['./bussinessnews.component.css']
})
export class BussinessnewsComponent implements OnInit {

  constructor(private newsapi: NewsapiserviceService) { }

  news: any[] = [];

  ngOnInit(): void {
    this.newsapi.bussinessNews().subscribe((rs) => {
      this.news = rs.articles;
    });
  }

}
