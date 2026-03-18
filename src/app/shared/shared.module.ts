import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CourseCardListComponent } from './components/course-card-list/course-card-list.component';
import { StudentCardListComponent } from './components/student-card-list/student-card-list.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CourseCardListComponent,
    StudentCardListComponent

  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule
  ],
  exports: [
    CourseCardListComponent,
    StudentCardListComponent
  ]
})
export class SharedModule { }
