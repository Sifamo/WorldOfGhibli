import { Component, Input, OnInit } from '@angular/core';
import { Fan } from 'src/app/Model/fan';

@Component({
  selector: 'app-contributions',
  templateUrl: './contributions.component.html',
  styleUrls: ['./contributions.component.css']
})
export class ContributionsComponent implements OnInit {

  @Input() contributions?: Fan[];
  constructor() { }

  ngOnInit(): void {
  }

}
