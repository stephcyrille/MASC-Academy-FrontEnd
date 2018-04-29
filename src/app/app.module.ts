import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Providers
import { HighlightService } from './providers/highlight.service';

import { AppComponent } from './app.component';
import { AppNavbarComponent } from './components/app-navbar/app-navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { IndexComponent } from './components/index/index.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { FooterComponent } from './components/footer/footer.component';
import { PostsComponent } from './components/posts/posts.component';
import { SinglePostsComponent } from './components/single-posts/single-posts.component';
import { CoursesComponent } from './components/courses/courses.component';
import { AngularCoursesComponent } from './components/angular-courses/angular-courses.component';
import { DjangoRestFrameworkCoursesComponent } from './components/django-rest-framework-courses/django-rest-framework-courses.component';
import { IonicCoursesComponent } from './components/ionic-courses/ionic-courses.component';
import { DjangoRestFrameworkSingleCourseComponent } from './components/django-rest-framework-single-course/django-rest-framework-single-course.component';
import { IonicSingleCourseComponent } from './components/ionic-single-course/ionic-single-course.component';
import { AngularSingleCourseComponent } from './components/angular-single-course/angular-single-course.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

// Prism
import 'prismjs/prism';
 
/* Import the language you need to highlight */
import 'prismjs/components/prism-typescript';
 
import { PrismComponent } from 'angular-prism';
import { ArticleService } from './providers/article.provider';
import { PostsAngularComponent } from './components/posts-angular/posts-angular.component';
import { PostsIonicComponent } from './components/posts-ionic/posts-ionic.component';
import { PostsDrfComponent } from './components/posts-drf/posts-drf.component';
import { PostsOtherComponent } from './components/posts-other/posts-other.component';




const appRoute: Routes = [
  { path: '', component: IndexComponent },
  { path: 'posts/all', component: PostsComponent },
  { path: 'posts/angular', component: PostsAngularComponent },
  { path: 'posts/ionic', component: PostsIonicComponent },
  { path: 'posts/drf', component: PostsDrfComponent },
  { path: 'posts/other', component: PostsOtherComponent },
  { path: 'posts/all/:slug', component: SinglePostsComponent },
  { path: 'cours', component: CoursesComponent },
  { path: 'cours/angular', component: AngularCoursesComponent },
  { path: 'cours/angular/:cours', component: AngularSingleCourseComponent },
  { path: 'cours/ionic', component: IonicCoursesComponent },
  { path: 'cours/ionic/:cours', component: IonicSingleCourseComponent },
  { path: 'cours/django-rest-framework', component: DjangoRestFrameworkCoursesComponent },
  { path: 'cours/django-rest-framework/:cours', component: DjangoRestFrameworkSingleCourseComponent },
  { path: 'about', component: AboutComponent }
];



@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    CarouselComponent,
    IndexComponent,
    JumbotronComponent,
    FooterComponent,
    PostsComponent,
    SinglePostsComponent,
    CoursesComponent,
    AngularCoursesComponent,
    DjangoRestFrameworkCoursesComponent,
    IonicCoursesComponent,
    DjangoRestFrameworkSingleCourseComponent,
    IonicSingleCourseComponent,
    AngularSingleCourseComponent,
    AboutComponent,
    LoginComponent,
    RegisterComponent,
    PrismComponent,
    PostsAngularComponent,
    PostsIonicComponent,
    PostsDrfComponent,
    PostsOtherComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoute)
  ],
  providers: [
    HighlightService,
    ArticleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
