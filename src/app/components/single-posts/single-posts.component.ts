import { Component, OnInit, AfterViewChecked, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { HighlightService } from '../../providers/highlight.service';
import { ArticleService } from '../../providers/article.provider';
import { Article } from '../../models/article.model';



@Component({
  selector: 'app-single-posts',
  templateUrl: './single-posts.component.html',
  styleUrls: ['./single-posts.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SinglePostsComponent implements OnInit, AfterViewChecked {
  slug: string;
  post: Array<Article>;
  errorMessage: string;
  highlighted: boolean = false;


  constructor(private highlightService: HighlightService, private articleService: ArticleService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.slug = this.route.snapshot.params['slug'];
    this.getSingleArticle(this.slug);
  }


  getSingleArticle(slug){
    this.articleService.getSinglePost(slug)
    .subscribe(
        article => {
          this.post = article;
          console.log(this.post)
        }, error => {
          this.errorMessage = 'Erreur 404: Le colis avec le slug ' + slug + ' est introuvable!';
        }
      );
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

}
