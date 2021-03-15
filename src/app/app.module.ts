import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FilmGalleryComponent } from './film/film-gallery/containers/film-gallery.component';
import { FilmDetailsComponent } from './film/film-details/containers/film-details.component';
import { AppRoutingModule } from './app-routing.module';
import { FeedbackFormComponent } from './survey/feedback-form/containers/feedback-form.component';
import { FormsModule } from '@angular/forms';
import { FilmListComponent } from './film/film-gallery/components/film-list/film-list.component';
import { DisplayDetailsComponent } from './film/film-details/components/display-details/display-details.component';
import { ContributionsComponent } from './survey/feedback-form/components/contributions/contributions.component';
import { ContributionFormComponent } from './survey/feedback-form/components/contribution-form/contribution-form.component';


@NgModule({
  declarations: [
    AppComponent,
    FilmGalleryComponent,
    FilmDetailsComponent,
    FeedbackFormComponent,
    FilmListComponent,
    DisplayDetailsComponent,
    ContributionsComponent,
    ContributionFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
