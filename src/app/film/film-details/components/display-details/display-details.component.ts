import { Component, Input, OnInit } from '@angular/core';
import { Film } from 'src/app/Model/film';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css']
})
export class DisplayDetailsComponent implements OnInit {

  @Input() film?: Film;

  constructor() { }

  ngOnInit(): void {
  }

}
