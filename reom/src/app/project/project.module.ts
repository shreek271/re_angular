import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ProjectFormComponent } from './project-form/project-form.component';
import { ProjectComponent} from './project.component';
import { ProjectService } from './project.service';
import { ProjectListComponent } from './project-list/project-list.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    ProjectService
  ],
  exports:[
    ProjectFormComponent,
    ProjectComponent
  ],
  declarations: [ProjectFormComponent, ProjectComponent, ProjectListComponent]
})
export class ProjectModule { }
