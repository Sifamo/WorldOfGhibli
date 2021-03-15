import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmDetailsComponent } from './film/film-details/containers/film-details.component';
import { FilmGalleryComponent } from './film/film-gallery/containers/film-gallery.component';
import { FeedbackFormComponent } from './survey/feedback-form/containers/feedback-form.component';


const routes: Routes =[ 
  {path: '', redirectTo: '/gallery', pathMatch: 'full'},
  {path: 'gallery', component: FilmGalleryComponent},
  {path: 'detail/:id', component: FilmDetailsComponent},
  {path: 'memorial', component: FeedbackFormComponent},
  
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
