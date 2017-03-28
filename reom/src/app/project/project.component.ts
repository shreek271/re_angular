import { Component, OnInit } from '@angular/core';
import { ProjectService } from './project.service';
import { Project } from './project-model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})

export class ProjectComponent implements OnInit {
  
  errorMessage: string;
  projects: Project[];
  project = new Project();
  //@Input() projects;

  constructor(private projectService: ProjectService) { }

  ngOnInit() { this.getProjects(); }

  getProjects(){
  	this.projectService.getProjects().subscribe(
  										projects => this.projects = projects,
  										error => this.errorMessage = <any>error);
  }

  updateProjects(event) {
    this.projects = event;
  }

  editProjects(event){
    alert("hello");
    //this.project = event;
  }
}
