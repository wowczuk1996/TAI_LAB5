import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BlogItemComponent } from './components/blog-item/blog-item.component';
import { BlogItemTextComponent } from './components/blog-item-text/blog-item-text.component';
import { BlogItemImageComponent } from './components/blog-item-image/blog-item-image.component';
import { BlogItemDetailsComponent } from './components/blog-item-details/blog-item-details.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {DataService} from "./services/data.service";
import { SummaryPipe } from './pipes/summary.pipe';
import { SearchBarComponent } from './shared/search-bar/search-bar.component';
import {FormsModule} from "@angular/forms";
import { BlogHomeComponent } from './components/blog-home/blog-home.component';
import { FilterPipe } from './pipes/filter.pipe';
import { TextFormatDirective } from './directives/text-format.directive';
import { SelectizeComponent } from './components/selectize/selectize.component';
import { NewPostComponent } from './components/new-post/new-post.component';
import { LoginComponent } from './components/login/login.component';
import {AuthenticationService} from "./services/authentication.service";
import {HttpIntercepterBasicAuthService} from "./services/interceptor-auth.service";
import { AddPostComponent } from './components/add-post/add-post.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogComponent,
    QuizComponent,
    ContactComponent,
    NavbarComponent,
    BlogItemComponent,
    BlogItemTextComponent,
    BlogItemImageComponent,
    BlogItemDetailsComponent,
    SummaryPipe,
    SearchBarComponent,
    BlogHomeComponent,
    FilterPipe,
    TextFormatDirective,
    SelectizeComponent,
    NewPostComponent,
    LoginComponent,
    AddPostComponent
  ],

  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],

  providers: [
    DataService,
    AuthenticationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpIntercepterBasicAuthService,
      multi: true
    },



  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
