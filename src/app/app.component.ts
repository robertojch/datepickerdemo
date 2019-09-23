import { Component, OnInit } from '@angular/core';
import { esLocale } from 'ngx-bootstrap/locale';
import { defineLocale } from 'ngx-bootstrap/chronos';
import {  BsLocaleService } from 'ngx-bootstrap/datepicker';
import { Column } from './custom-table/model/column';
import { GridOption } from './custom-table/model/gridOption';
defineLocale('es', esLocale);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
  title = 'datepickerdemo';
  myDateValue: Date;

  private columnsDefs1: Column[];
  private rowData1: any[];
  gridOptions1: GridOption;

  constructor(private bsLocaleService: BsLocaleService) {
    this.bsLocaleService.use('es');
  }
  ngOnInit() {
    this.myDateValue = new Date();
    this.columnsDefs1 = [
      { field: 'ali_dia', headerName: 'Alimentaci&oacute;n <br>por d&iacute;a', cellEditor: 'input', width: '104', sortable: true },
      { field: 'ali_type', headerName: 'Tipo de alimento', width: '174', editable: false},
      { field: 'ali_hec', headerName: 'Alimentaci&oacute;n <br>por hectarea', cellEditor: 'button', width: '175', editable: false},
      { field: 'ali_peso', headerName: 'Peso',  width: '104', cellEditor: 'input' , editable: true},
      { field: 'ali_inc', headerName: 'Incremento <br>acumulado', width: '100', editable: false},
      { field: 'ali_sup', headerName: 'Supervivencia', width: '100', cellEditor: 'input', editable: true},
      { field: 'ali_blo', headerName: 'Blomasa por hect&aacute;rea',   width: '100', editable: false}
    ];

    this.rowData1 = [
      {
        ali_dia: { value: '525', um: 'kg/dia'},
        ali_type: { value: '-'},
        ali_hec: { value: '120', um: 'kg/Ha'},
        ali_peso: { value: '6.24', um: 'g'},
        ali_inc: { value: '2.34', um: 'g/sem'},
        ali_sup: { value: '64', um: '%'},
        ali_blo: { value: '9400', um: 'lb/ha'},
      },
      {
        ali_dia: { value: '525', um: 'kg/dia'},
        ali_type: { value: '-'},
        ali_hec: { value: '120', um: 'kg/Ha'},
        ali_peso: { value: '6.24', um: 'g'},
        ali_inc: { value: '2.34', um: 'g/sem'},
        ali_sup: { value: '64', um: '%'},
        ali_blo: { value: '9400', um: 'lb/ha'},
      },
      {
        ali_dia: { value: '525', um: 'kg/dia'},
        ali_type: { value: '-'},
        ali_hec: { value: '120', um: 'kg/Ha'},
        ali_peso: { value: '6.24', um: 'g'},
        ali_inc: { value: '2.34', um: 'g/sem'},
        ali_sup: { value: '64', um: '%'},
        ali_blo: { value: '9400', um: 'lb/ha'},
      },
      {
        ali_dia: { value: '525', um: 'kg/dia'},
        ali_type: { value: '-'},
        ali_hec: { value: '120', um: 'kg/Ha'},
        ali_peso: { value: '6.24', um: 'g'},
        ali_inc: { value: '2.34', um: 'g/sem'},
        ali_sup: { value: '64', um: '%'},
        ali_blo: { value: '9400', um: 'lb/ha'},
      },
      {
        ali_dia: { value: '525', um: 'kg/dia'},
        ali_type: { value: '-'},
        ali_hec: { value: '120', um: 'kg/Ha'},
        ali_peso: { value: '6.24', um: 'g'},
        ali_inc: { value: '2.34', um: 'g/sem'},
        ali_sup: { value: '64', um: '%'},
        ali_blo: { value: '9400', um: 'lb/ha'},
      }
    ];

    this.gridOptions1 = {
      columnsDefs: this.columnsDefs1,
      rowData: this.rowData1,
      width: '831'
    };


  }

  onDateChange(newDate: Date) {
    console.log(newDate);
  }
}
