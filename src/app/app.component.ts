import { Component } from '@angular/core';
import { LocalStorageService } from './shared/services/local-storage.service';
import { WeatherServiceService } from './shared/services/weather-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private localStorageService: LocalStorageService, private weatherService: WeatherServiceService) {
    if (!this.localStorageService.retrieve('tasks')) {
      this.localStorageService.create('tasks', []);
    }
    this.weatherService.getWeather({}).subscribe(
      res => console.log(res),
      error => console.log(error)
    )}
}
