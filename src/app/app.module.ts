import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChipsMultiSelectComponent } from './chips-multi-select/chips-multi-select.component';
import { ProjectsComponent } from './projects/projects.component';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatcardsComponent } from './matcards/matcards.component';
import { HttpClientModule } from '@angular/common/http';
import { DartComponent } from './dart/dart.component';
import { ToolsComponent } from './tools/tools.component';
import { FormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import { HomeComponent } from './home/home.component'; 

@NgModule({
  declarations: [AppComponent, ChipsMultiSelectComponent, ProjectsComponent, MatcardsComponent,DartComponent, ToolsComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatChipsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule,
    MatInputModule,
    FormsModule,
    MatRadioModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

