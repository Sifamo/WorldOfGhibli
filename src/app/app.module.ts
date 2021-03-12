import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FilmGalleryComponent } from './film/film-gallery/film-gallery.component';
import { FilmDetailsComponent } from './film/film-details/film-details.component';
import { AppRoutingModule } from './app-routing.module';
import { FeedbackFormComponent } from './survey/feedback-form/feedback-form.component';
import { FeedbackResponseComponent } from './survey/feedback-response/feedback-response.component';


@NgModule({
  declarations: [
    AppComponent,
    FilmGalleryComponent,
    FilmDetailsComponent,
    FeedbackFormComponent,
    FeedbackResponseComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
