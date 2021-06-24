import { Component } from '@angular/core';
import { ToDoList } from './models/todolist';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDO';

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

public selectedList: ToDoList | null = null;

  public OnListSelected(list: ToDoList){
    console.log(`Got list: ${list.name}!`);
    this.selectedList = list;
  }
}
