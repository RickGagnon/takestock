import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChipsMultiSelectComponent } from './chips-multi-select/chips-multi-select.component';
import { DartComponent } from './dart/dart.component';
import { MatcardsComponent } from './matcards/matcards.component';
import { ProjectDataSource } from './projects/project-datasource';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ToolsComponent } from './tools/tools.component';

const routes: Routes = [
  { path: 'chips', component: ChipsMultiSelectComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'Tools', component: DartComponent },
  { path: 'dart', component: DartComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
