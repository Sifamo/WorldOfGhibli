import { Component, Input, OnInit } from '@angular/core';
import { Film } from 'src/app/Model/film';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {

  @Input() film?: Film;

  constructor() { }

  ngOnInit(): void {
  }

}
