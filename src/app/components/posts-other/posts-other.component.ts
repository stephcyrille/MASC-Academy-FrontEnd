import { Component, OnInit, AfterViewChecked, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { HighlightService } from '../../providers/highlight.service';

import { ArticleService } from '../../providers/article.provider';
import { Article } from '../../models/article.model';


@Component({
  selector: 'app-posts-other',
  templateUrl: './posts-other.component.html',
  styleUrls: ['./posts-other.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class PostsOtherComponent implements OnInit, AfterViewChecked {
  errorMessage: string;
  highlighted: boolean = false;


  constructor(private highlightService: HighlightService, private articleService: ArticleService, private route: ActivatedRoute) { }

  ngOnInit() {
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

  onClick(thing: string){
    let x = document.querySelector('#' + thing);
    if (x){
        x.scrollIntoView();
    }
}
}
