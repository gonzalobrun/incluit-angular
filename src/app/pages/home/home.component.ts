import { Component, OnInit } from '@angular/core';
import { WeatherServiceService } from 'src/app/shared/services/weather-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public currentWeather: any = null;

  constructor(private weatherService: WeatherServiceService) { }

  ngOnInit() {
  }

  searchWeather(param: string): void {
    let params = {
      q: param,
      units: 'metric',
      type: 'accurate'
    }

    this.weatherService.getWeather(params).subscribe(
      res => {
        this.currentWeather = res;
      },
      err => console.error(err)
    )

  }
   

}