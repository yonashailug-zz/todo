import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatListModule, MatCardModule, MatMenuModule, MatButtonModule, MatCheckboxModule} from '@angular/material';
import { Routes, RouterModule } from '@angular/router';
import { DragulaModule } from 'ng2-dragula';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TodoService } from './todo/todo.service';


const routes: Routes = [
  {
    path: '', 
    redirectTo: 'todo', 
    pathMatch: 'full'
  },{
    path: 'home',
    component: AppComponent
  },{
    path: 'todo',
    component: TodoComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatMenuModule,
    MatCheckboxModule,
    MatCardModule,
    MatListModule,
    RouterModule.forRoot(routes),
    DragulaModule
  ],
  exports:[],
  providers: [
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
