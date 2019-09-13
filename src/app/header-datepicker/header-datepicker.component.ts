import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-datepicker',
  templateUrl: './header-datepicker.component.html',
  styleUrls: ['./header-datepicker.component.scss']
})
export class HeaderDatepickerComponent implements OnInit {

  selectedDate: Date;
  constructor() { }

  ngOnInit() {
    this.selectedDate = new Date();
  }

}
