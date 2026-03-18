import { Pipe, PipeTransform } from '@angular/core';
import { parseISO, differenceInYears } from 'date-fns';

@Pipe({
  standalone: false,
  name: 'age'
})
export class AgePipe implements PipeTransform {
  transform(birthday: string, suffix?: string): number | string {
    const age = differenceInYears(Date.now(), parseISO(birthday));
    return suffix ? `${age} ${suffix}` : age;
  }
}
