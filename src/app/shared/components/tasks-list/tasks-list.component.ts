import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../interfaces/task';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent implements OnInit {

  @Input() taskList: Array<Task> = [];

  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit() {
  }

  deleteTask(index: number): void {
    this.taskList.splice(index, 1);
    this.localStorageService.updateAll('tasks',this.taskList);
  }
}
