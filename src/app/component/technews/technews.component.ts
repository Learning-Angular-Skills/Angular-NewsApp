import { Component, OnInit } from '@angular/core';
import { NewsapiserviceService } from '../../sevices/news-api/newsapiservice.service';

@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.css']
})
export class TechnewsComponent implements OnInit {

  constructor(private technewsapi: NewsapiserviceService) { }

  technews: any[] = [];

  ngOnInit(): void {
    this.technewsapi.techNews().subscribe((rs) => {
      this.technews = rs.articles;
    });
  }

}
