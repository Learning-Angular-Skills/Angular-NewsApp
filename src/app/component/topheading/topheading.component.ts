import { Component, OnInit } from '@angular/core';
import { NewsapiserviceService } from '../../sevices/news-api/newsapiservice.service';

@Component({
  selector: 'app-topheading',
  templateUrl: './topheading.component.html',
  styleUrls: ['./topheading.component.css']
})
export class TopheadingComponent implements OnInit {

  constructor(private newsapi: NewsapiserviceService) { }

  topHeadingDisplay: any[] = [];

  ngOnInit(): void {
    this.newsapi.topHeading().subscribe((result) => {
      this.topHeadingDisplay = result.articles;
    });
  }

}
