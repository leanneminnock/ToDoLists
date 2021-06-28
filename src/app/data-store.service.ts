import { Injectable } from '@angular/core';
import { ToDoList } from './models/todolist';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {
  public toDoLists: ToDoList[] = 
  [{
    id: 1,
    name: "first list",
    items: [{
      id: 1,
      item: "stuff",
      completed: false
    },
    {
      id: 2,
      item: "things",
      completed: false
    }]
  },
  {
    id: 2,
    name: "second list",
    items: [{
      id: 1,
      item: "doodle",
      completed: false
    },
    {
      id: 2,
      item: "draw",
      completed: false
    }]
  }];
  constructor() { }
}
