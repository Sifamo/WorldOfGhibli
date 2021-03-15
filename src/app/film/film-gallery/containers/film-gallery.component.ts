import { Component, OnInit } from '@angular/core';
import { GalleryService } from 'src/app/film/gallery-service.service';
import { Film } from 'src/app/Model/film';

@Component({
  selector: 'app-film-gallery',
  templateUrl: './film-gallery.component.html',
  styleUrls: ['./film-gallery.component.css']
})
export class FilmGalleryComponent implements OnInit {

  films: Film[];
  constructor(private galleryService: GalleryService) { }

  ngOnInit(): void {
    this.getFilms();
  }


  getFilms(): void {
    this.galleryService.getFilms()
    .subscribe(films => {
      this.films = films.map(film =>   Object.assign(film,{cover:film.title.replace(/[\W]+/g, "")}));
      console.log(films)});
  }

  changeStyle($event) {

  }

}
