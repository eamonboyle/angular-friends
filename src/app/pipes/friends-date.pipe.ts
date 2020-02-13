import { Pipe, PipeTransform } from '@angular/core';

/**
 * It is used to format the date
 */
@Pipe({
  name: 'friendsdate'
})
export class FriendsDatePipe implements PipeTransform {

  transform(dateInMillis: string) {
  }
}