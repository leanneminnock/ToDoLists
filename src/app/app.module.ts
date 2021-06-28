import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { CreateListFormComponent } from './create-list-form/create-list-form.component';
import { ListItemFormComponent } from './list-item-form/list-item-form.component';
import { SummaryListsComponent } from './summary-lists/summary-lists.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CreateListFormComponent,
    ListItemFormComponent,
    SummaryListsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
