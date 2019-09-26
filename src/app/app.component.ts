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
  alimentodiario: string;
  pesovivo: string;
  private columnsDefs1: Column[];
  private rowData1: any[];
  gridOptions1: GridOption;
  list: Array<any>;
  customPatterns: any;
  constructor(private bsLocaleService: BsLocaleService) {
    this.bsLocaleService.use('es');
  }
  ngOnInit() {
    this.alimentodiario = '10000';


    this.customPatterns = {0: { pattern:
       new RegExp('^0*([0-9]|[1-8][0-9]|9[0-9]|[1-8][0-9]{2}|9[0-8][0-9]|99[0-9]|[1-8][0-9]{3}|9[0-8][0-9]{2}|99[0-8][0-9]|999[0-9]|10000)$')}};


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

    this.list = [
      { id: 1, text: 'CLA 35% 0.8' },
      { id: 2, text: 'CLA 35% 1.2'},
      { id: 3, text: 'CLA 35% 2.0'},
      { id: 4, text: 'CLA 35% 2.0 AD'},
      { id: 5, text: 'CLA 35% 2.5'},
      { id: 6, text: 'FIN 35% 2.0'},
      { id: 7, text: 'CLA 35% 2.5 AD'},
      { id: 8, text: 'FIN 35% 2.5'},
      { id: 9, text: 'CLA 35% 0.8'},
      { id: 10, text: 'CLA 35% 1.2'},
      { id: 11, text: 'CLA 35% 2.0'},
      { id: 12, text: 'CLA 35% 2.0 AD'},
      { id: 13, text: 'CLA 35% 2.5'},
      { id: 14, text: 'FIN 35% 2.0'},
      { id: 15, text: 'CLA 35% 2.5 AD'},
      { id: 16, text: 'FIN 35% 2.5'}
    ];


  }

  onDateChange(newDate: Date) {
    console.log(newDate);
  }
}
