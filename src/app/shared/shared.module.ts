import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './components/header/header.component';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { TaskComponent } from './components/task/task.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { LocalStorageService } from './services/local-storage.service';
import { WeatherServiceService } from './services/weather-service.service';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';
import { CentigradePipe } from './pipes/centigrade.pipe';
import { WindPipe } from './pipes/wind.pipe';

@NgModule({
  declarations: [
    HeaderComponent,
    TasksListComponent,
    TaskComponent,
    AddTaskComponent,
    WeatherCardComponent,
    CentigradePipe,
    WindPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    HttpClientModule
  ],
  providers: [
    LocalStorageService,
    WeatherServiceService
  ],
  exports: [
    HeaderComponent,
    TasksListComponent,
    TaskComponent,
    AddTaskComponent,
    WeatherCardComponent,
    CentigradePipe,
    WindPipe
  ]
})
export class SharedModule { }
