import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ToDoList } from '../models/todolist';

@Component({
  selector: 'app-create-list-form',
  templateUrl: './create-list-form.component.html',
  styleUrls: ['./create-list-form.component.css']
})
export class CreateListFormComponent implements OnInit {

  public toDoName: string = "";

  @Output()
  public OnNewList = new EventEmitter<ToDoList>();

  constructor() { }

  ngOnInit(): void {
  }

  public CreateToDoList(){
    this.OnNewList.emit({
      name: this.toDoName,
      id: -1,
      items: []
    });
  }


}
