import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Country } from 'src/app/Model/country';

@Component({
  selector: 'app-contribution-form',
  templateUrl: './contribution-form.component.html',
  styleUrls: ['./contribution-form.component.css']
})
export class ContributionFormComponent implements OnInit {

  @Output() formEmitter = new EventEmitter<NgForm>();
  @Input() countries?: Country[];
  constructor() { }

  ngOnInit(): void {
  }

  fanSubmition(fanForm: NgForm){
    console.log(fanForm.value)
    this.formEmitter.emit(fanForm);
  }
}
