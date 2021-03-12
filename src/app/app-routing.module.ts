import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmDetailsComponent } from './film/film-details/film-details.component';
import { FilmGalleryComponent } from './film/film-gallery/film-gallery.component';


const routes: Routes =[ 
  {path: '', redirectTo: '/gallery', pathMatch: 'full'},
  {path: 'gallery', component: FilmGalleryComponent},
  {path: 'detail/:id', component: FilmDetailsComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
