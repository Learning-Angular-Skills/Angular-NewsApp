import { Component, OnInit } from '@angular/core';
import { NewsapiserviceService } from '../../sevices/news-api/newsapiservice.service';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {

  constructor(private newsapi: NewsapiserviceService) { }

  news: any[] = [];

  ngOnInit(): void {
    this.newsapi.generalNews().subscribe((rs) => {
      this.news = rs.articles;
    });
  }

}
