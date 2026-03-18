import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CourseCardListComponent } from './components/course-card-list/course-card-list.component';
import { StudentCardListComponent } from './components/student-card-list/student-card-list.component';
import { SelectCourseComponent } from './components/select-course/select-course.component';
import { ShortNamePipe } from './pipes/short-name.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgePipe } from './pipes/age.pipe';


@NgModule({
  declarations: [
    CourseCardListComponent,
    StudentCardListComponent,
    SelectCourseComponent,
    ShortNamePipe,
    AgePipe
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule
  ],
  exports: [
    CourseCardListComponent,
    StudentCardListComponent,
    SelectCourseComponent,
    AgePipe,
    ShortNamePipe
  ]
})
export class SharedModule { }
