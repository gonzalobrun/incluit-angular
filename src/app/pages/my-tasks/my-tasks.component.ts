import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/shared/interfaces/task';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

@Component({
  selector: 'app-my-tasks',
  templateUrl: './my-tasks.component.html',
  styleUrls: ['./my-tasks.component.scss']
})
export class MyTasksComponent implements OnInit {

  myTasks: Array<Task> = [];

  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit() {
    this.myTasks = this.localStorageService.retrieve('tasks');
  }

  onNewTask(task: Task): void {
    this.myTasks.push(task)
    this.localStorageService.update('tasks', this.myTasks);
  }
}
