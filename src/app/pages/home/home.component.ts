import { Component, OnInit } from '@angular/core';
import { WeatherServiceService } from 'src/app/shared/services/weather-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public currentWeather: any = null;
  public isLoading: boolean = false;

  constructor(private weatherService: WeatherServiceService) { }

  ngOnInit() {
    this.searchWeather('Cordoba')
  }

  searchWeather(param: string): void {
    this.isLoading = true;
    this.currentWeather= null;

    let params = {
      q: param,
      units: 'metric',
      type: 'link'
    }

    this.weatherService.getWeather(params).subscribe(
      res => {
        this.currentWeather = res;
        this.isLoading = false;
      },
      err => {
        this.isLoading = false;
        console.error(err)
      }
    )

  }
   

}