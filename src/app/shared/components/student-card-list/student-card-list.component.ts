import { Component, Input } from '@angular/core';
import differenceInYears from 'date-fns/esm/fp/differenceInYears/index.js';
import parseISO from 'date-fns/esm/fp/parseISO/index.js';
import { Student } from 'src/app/features/students/student';

@Component({
  standalone: false,
  selector: 'app-student-card-list',
  templateUrl: './student-card-list.component.html',
  styleUrls: ['./student-card-list.component.css']
})
export class StudentCardListComponent {
  @Input() students!: Student[];

  studentShortName(student: Student) {
    const names = student.name.split(' ');
    return names.length > 1 ? `${names.shift()} ${names.pop()}` : student.name;
  }

  studentAge(student: Student, suffix?: string) {
    const age = differenceInYears(Date.now(), parseISO(student.birthday));
    return suffix ? `${age} ${suffix}` : age;
  }
}
