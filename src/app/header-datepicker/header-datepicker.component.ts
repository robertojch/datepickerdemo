import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header-datepicker',
  templateUrl: './header-datepicker.component.html',
  styleUrls: ['./header-datepicker.component.scss']
})
export class HeaderDatepickerComponent implements OnInit {

  selectedDate: Date;
  disabledDates: Date[];
  isDisabled: boolean;
  maxDate: Date;
  currentDate: Date;
  @Output() dateChange =  new EventEmitter<Date>();
  constructor() { }

  ngOnInit() {
    this.selectedDate = new Date();
    this.disabledDates = [new Date('2019-09-16'),
                          new Date('2019-09-17'),
                          new Date('2019-09-18')];
    this.isDisabled = false;
    this.maxDate = new Date('2019-09-26'); // To disabled dates.
  }

  onValueChange(value: Date): void {
    this.currentDate = value;
    console.log(this.currentDate);
    this.dateChange.emit(value);
  }

}
