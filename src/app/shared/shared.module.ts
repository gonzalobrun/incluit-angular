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

@NgModule({
  declarations: [
    HeaderComponent,
    TasksListComponent,
    TaskComponent,
    AddTaskComponent
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
    AddTaskComponent
  ]
})
export class SharedModule { }
