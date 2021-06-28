import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { SummaryListsComponent } from './summary-lists/summary-lists.component';

const routes: Routes = [
  {
    path: "",
    component: SummaryListsComponent
  },
  {
    path: "list/:listId",
    component: ListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
