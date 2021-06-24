import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../models/todo';
import { ToDoList } from '../models/todolist';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input()
  public list: ToDoList | null = null;
  constructor() { }

  ngOnInit(): void {
    
  }

}
