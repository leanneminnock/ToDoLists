import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-list-item-form',
  templateUrl: './list-item-form.component.html',
  styleUrls: ['./list-item-form.component.css']
})
export class ListItemFormComponent implements OnInit {

  public toDoItem: string = "";

  @Output()
  public OnNewItem = new EventEmitter<Todo>();

  constructor() { }

  ngOnInit(): void {
  }
  
  public CreateToDoItem(){
    this.OnNewItem.emit({
      item: this.toDoItem,
      id: -1,
      completed: false
    });
  }
}
