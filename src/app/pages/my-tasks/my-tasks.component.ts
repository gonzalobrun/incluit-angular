import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/shared/interfaces/task';

@Component({
  selector: 'app-my-tasks',
  templateUrl: './my-tasks.component.html',
  styleUrls: ['./my-tasks.component.scss']
})
export class MyTasksComponent implements OnInit {

  myTasks: Array<Task> = [];

  constructor() { }

  ngOnInit() {}

  onNewTask(task: Task): void {
    this.myTasks.push(task)
  }

}
