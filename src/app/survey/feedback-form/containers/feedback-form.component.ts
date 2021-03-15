import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Country } from 'src/app/Model/country';
import { Fan } from 'src/app/Model/fan';
import { MemorialService } from '../../memorial.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css']
})
export class FeedbackFormComponent implements OnInit {

  countries: Country[];
  contributions: Fan[];
  constructor(private memorialService: MemorialService, private location: Location) { }

  ngOnInit(): void {
    console.log('here')
    this.memorialService.getCountries()
                        .subscribe(countries => this.countries = countries);

    this.memorialService.getFans()
                        .subscribe(fans => this.contributions = fans );
  }

  fanSubmition(fan: NgForm) {
    this.contributions.unshift(fan.value);
    this.memorialService.addFan(fan.value)
                        .subscribe(data => console.log(data));
    fan.reset();
  }

  goback() {
    this.location.back();
  }
  

  

}
