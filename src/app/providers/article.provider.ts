import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Article } from '../models/article.model';



@Injectable()
export class ArticleService {
    private url = 'http://localhost:8000/api/';

    constructor(private http: Http) {}


    getSinglePost(slug): Observable<any[]>{
        return this.http.get(this.url + 'articles/' + slug).map(res => <Article[]> res.json()).catch(this.handleError);
    }


    getAllArticles(): Observable<any[]>{
        return this.http.get(this.url + 'articles/').map(res => <Article[]> res.json()).catch(this.handleError);
    }
    
    
    private handleError(error: Response){
        return Observable.throw(error.json().errors || 'server error');
    }
}