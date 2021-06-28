import { Component } from '@angular/core';
import { DataStoreService } from './data-store.service';
import { ToDoList } from './models/todolist';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDO';
  constructor(public data: DataStoreService) { }
  
}
