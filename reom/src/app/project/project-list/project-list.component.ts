import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../project-model';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  errorMessage: string;
  @Input() projects;
  @Output() projectsEdited = new EventEmitter();
  
  constructor(private projectService: ProjectService) { }

  ngOnInit() { }
  
  deleteProject(p){
  	this.projectService.removeProject(p.id).subscribe(
        project => {
          var index = this.projects.indexOf(p);
          this.projects.splice(index, 1);
        },
        err => {
          console.log('err:', err);
        }
    )
  }

  edProject(p){
    alert("clicked"); 
    this.projectsEdited.emit(p);
  }
}
