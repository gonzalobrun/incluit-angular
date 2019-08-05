import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  public modalRef: BsModalRef;
  public newTaskForm: FormGroup;

  constructor(private modalService: BsModalService) {}

  ngOnInit() {
    this.buildForm();
  }

  buildForm(): void {
    this.newTaskForm = new FormGroup({
      title: new FormControl(''),
      description: new FormControl(''),
      date: new FormControl(new Date()),
      deadline: new FormControl('')
    })
  }

  confirmTask(): void {
    console.log(this.newTaskForm.value);
  }

  public openAddModal(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template);
  }

}
