import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../interfaces/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() task: Task;
  @Output() delete = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  deleteTask(): void {
    this.delete.emit();
  }

}
