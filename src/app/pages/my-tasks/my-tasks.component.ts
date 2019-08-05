import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/shared/interfaces/task';

@Component({
  selector: 'app-my-tasks',
  templateUrl: './my-tasks.component.html',
  styleUrls: ['./my-tasks.component.scss']
})
export class MyTasksComponent implements OnInit {

  public myTasks: Array<Task>;

  constructor() { }

  ngOnInit() {}

}
