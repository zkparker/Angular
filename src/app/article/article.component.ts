import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  @Input() article: Article;
  link: any;


  constructor() {
  }

  voteUp(): boolean{
    this.article.voteUp();
    return false;
  }

  domain(): string{
    try {
      const domainAndPath: string = this.link.split('//')[1];
      return domainAndPath.split('/')[0];
    } catch (err) {
      return null;
    }
  }

  voteDown(): boolean{
    this.article.voteDown();
    return false;
  }
  ngOnInit(){
  }

}
