import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent implements OnInit {

  @Input() currentWeather: any;
  @Input() isLoading: any;

  constructor() { }

  ngOnChanges(){
  }

  ngOnInit() {
  }

}
