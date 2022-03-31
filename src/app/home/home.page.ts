import { Component } from '@angular/core';
import { format, parseISO } from 'date-fns';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  dateValue: any = '';

  constructor() {}


  formatDate(value: string) {
    console.log('TEST: ' + format(parseISO(value), 'HH:mm MMM dd yyyy'));
    this.dateValue = format(parseISO(value), 'HH:mm MMM dd yyyy');
  }

}
