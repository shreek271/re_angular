import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../project-model';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.scss']
})
export class ProjectFormComponent implements OnInit {

   @Input() projects;
   @Input() project;
   
   @Output() projectsUpdated = new EventEmitter();

  constructor(private projectService: ProjectService) { }

  submitProject(){
  	this.projectService.addProject(this.project).subscribe(
        project => {
          this.projectsUpdated.emit(this.projects.push(this.project));
          this.project = new Project();
        },
        err => {
          console.log('err:', err);
        }
    )
  }
  
  ngOnInit() { }

}
