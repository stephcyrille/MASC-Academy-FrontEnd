import { Component, OnInit, AfterViewChecked  } from '@angular/core';
import { HighlightService } from '../../providers/highlight.service';
import { Article } from '../../models/article.model';
import { ArticleService } from '../../providers/article.provider';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit, AfterViewChecked  {
  posts: Array<Article> = [];
  errorMessage: string;
  highlighted: boolean = false;

  constructor(private highlightService: HighlightService, private articleService: ArticleService) { 
    this.getPostArticles();
  }

  /**
   * Highlight blog post when it's ready
   */
  ngAfterViewChecked() {
    if (!this.highlighted) {
      this.highlightService.highlightAll();
      this.highlighted = true;
    }
  }

  ngOnInit() {
  }

  getPostArticles(){
    return this.articleService.getAllArticles().subscribe(post => 
      {
        this.posts = post, error => this.errorMessage = <any> error;
      }
    );
  }

}
