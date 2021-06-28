import { Component, OnInit } from '@angular/core';
import { DataStoreService } from '../data-store.service';
import { ToDoList } from '../models/todolist';

@Component({
  selector: 'app-summary-lists',
  templateUrl: './summary-lists.component.html',
  styleUrls: ['./summary-lists.component.css']
})
export class SummaryListsComponent implements OnInit {
  
  public selectedList: ToDoList | null = null;

  public OnListSelected(list: ToDoList){
    console.log(`Got list: ${list.name}!`);
    this.selectedList = list;
  }

  constructor(public data: DataStoreService) { }

  ngOnInit(): void {
  }
  public OnListCreated(list: ToDoList){
    this.data.toDoLists.push(list);
  }

}
