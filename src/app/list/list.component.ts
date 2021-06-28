import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataStoreService } from '../data-store.service';
import { Todo } from '../models/todo';
import { ToDoList } from '../models/todolist';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public list: ToDoList | undefined;
  
  
  constructor(public data: DataStoreService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const listId = Number(params.get('listId'));
      this.list = this.data.toDoLists.find(l => l.id === listId);
    });
  }

  public OnItemCreated(todo: Todo){
    this.list?.items.push(todo);
  }
}
