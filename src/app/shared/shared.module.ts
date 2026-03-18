import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CourseCardListComponent } from './components/course-card-list/course-card-list.component';
import { StudentCardListComponent } from './components/student-card-list/student-card-list.component';
import { ShortNamePipe } from './pipes/short-name.pipe';
import { FormsModule } from '@angular/forms';
import { AgePipe } from './pipes/age.pipe';


@NgModule({
  declarations: [
    CourseCardListComponent,
    StudentCardListComponent,
    ShortNamePipe,
    AgePipe
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule
  ],
  exports: [
    CourseCardListComponent,
    StudentCardListComponent,
    ShortNamePipe
  ]
})
export class SharedModule { }
