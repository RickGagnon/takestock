import { Component, OnInit } from '@angular/core';
import { ProjectDataSource, ProjectItem } from '../project/project-datasource';

@Component({
  selector: 'app-matcards',
  templateUrl: './matcards.component.html',
  styleUrls: ['./matcards.component.css']
})
export class MatcardsComponent implements OnInit {
  dataSource: ProjectDataSource;
  proj: ProjectItem[] = [];
  constructor() {
    this.dataSource = new ProjectDataSource();
    this.proj = this.dataSource.data;
    console.log(this.dataSource);
  }

  ngOnInit(): void {
  }

}
