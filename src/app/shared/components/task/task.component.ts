import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../interfaces/task';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() task: Task;
  @Output() delete = new EventEmitter();
  @Output() save = new EventEmitter();
  

  public isEditing = false;
  public editTaskForm: FormGroup;

  public previoudData: any;

  constructor() { }

  ngOnInit() {
    this.buildForm(this.task);
    this.editTaskForm.disable();
  }

  buildForm(task: Task): void {
    this.editTaskForm = new FormGroup({
      title: new FormControl(task.title, [Validators.required, Validators.minLength(3)]),
      description: new FormControl(task.description, [Validators.required]),
      deadline: new FormControl(new Date(task.deadline), [Validators.required]),
    })
  }

  deleteTask(): void {
    this.delete.emit();
  }

  editTask(task: Task): void {
    this.isEditing = !this.isEditing;
    if(this.isEditing) {
      this.editTaskForm.enable();
      this.previoudData = this.editTaskForm.value;
    }
    else {
      this.editTaskForm.setValue(this.previoudData);
      this.editTaskForm.disable();
    }
    
  }

  saveTask(task: Task): void {
    this.isEditing = !this.isEditing;
    
    this.save.emit(this.editTaskForm.value);
  }

}
