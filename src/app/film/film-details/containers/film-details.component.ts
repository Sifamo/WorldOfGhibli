import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { GalleryService } from 'src/app/film/gallery-service.service';
import { Film } from 'src/app/Model/film';


@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css']
})
export class FilmDetailsComponent implements OnInit {

  film: Film;

  constructor(
    private galleryService: GalleryService,
    private route: ActivatedRoute,
    private location: Location
    ) { }

  ngOnInit(): void {
    this.getFilm();
  }

  getFilm(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.galleryService.getFilm(id)
    .subscribe(film => {
      this.film = Object.assign(film,{cover:film.title.replace(/[\W]+/g, "")});
      console.log(film)});
  }

  goback() {
    this.location.back();
  }
}
