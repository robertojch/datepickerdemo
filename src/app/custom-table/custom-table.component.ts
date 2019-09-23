import { Component, OnInit, Input } from '@angular/core';
import { Column } from './model/column';
import { GridOption } from './model/gridOption';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss']
})
export class CustomTableComponent implements OnInit {

  @Input() gridOptions: GridOption;
  constructor() {}

  ngOnInit() {
  }
}
