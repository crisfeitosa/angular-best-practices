import { Component, Input } from '@angular/core';
import { Student } from 'src/app/features/students/student';

@Component({
  standalone: false,
  selector: 'app-student-card-list',
  templateUrl: './student-card-list.component.html',
  styleUrls: ['./student-card-list.component.css']
})
export class StudentCardListComponent {
  @Input() students!: Student[];

  trackByStudentId(index: number, student: Student) {
    return student.id;
  }
}
