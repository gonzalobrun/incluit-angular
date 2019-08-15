import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../interfaces/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {7

  @Input() task: Task;

  constructor() { }

  ngOnInit() {
  }

}
