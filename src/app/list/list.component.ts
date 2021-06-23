import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  todos: Todo[] = [{
    id: 1,
    item: "stuff",
    completed: true
  },
  {
    id: 2,
    item: "things",
    completed: true
  }];
  constructor() { }

  ngOnInit(): void {
    
  }

}
