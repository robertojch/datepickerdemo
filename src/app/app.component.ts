import { Component, OnInit } from '@angular/core';
import { esLocale } from 'ngx-bootstrap/locale';
import { defineLocale } from 'ngx-bootstrap/chronos';
import {  BsLocaleService } from 'ngx-bootstrap/datepicker';
defineLocale('es', esLocale);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
  title = 'datepickerdemo';
  myDateValue: Date;

  constructor(private bsLocaleService: BsLocaleService) {
    this.bsLocaleService.use('es');
  }
  ngOnInit() {
    this.myDateValue = new Date();
  }

  onDateChange(newDate: Date) {
    console.log(newDate);
  }
}
