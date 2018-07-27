import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {HttpModule} from '@angular/http'

//Services
import {TaskServiceService} from './services/task-service.service'

//Components
import { AppComponent } from './app.component';
import { ListAllComponent } from './list-all/list-all.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { TaskDeleteComponent } from './task-delete/task-delete.component';

//Router
import {RouterModule, Routes} from '@angular/router'


const routes: Routes = [
  {path: '', component: ListAllComponent},
  {path: 'details/:id', component: TaskDetailsComponent}


]

@NgModule({
  declarations: [
    AppComponent,
    ListAllComponent,
    CreateTaskComponent,
    TaskDetailsComponent,
    TaskEditComponent,
    TaskDeleteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [TaskServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
