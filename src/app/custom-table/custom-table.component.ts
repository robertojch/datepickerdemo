import { Component, OnInit } from '@angular/core';

interface Country {
  name: string;
  flag: string;
  area: number;
  population: number;
}

const COUNTRIES: Country[] = [
  {
    name: 'Russia',
    flag: 'f/f3/Flag_of_Russia.svg',
    area: 17075200,
    population: 146989754
  },
  {
    name: 'Canada',
    flag: 'c/cf/Flag_of_Canada.svg',
    area: 9976140,
    population: 36624199
  },
  {
    name: 'United States',
    flag: 'a/a4/Flag_of_the_United_States.svg',
    area: 9629091,
    population: 324459463
  },
  {
    name: 'China',
    flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    area: 9596960,
    population: 1409517397
  }
];

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss']
})
export class CustomTableComponent implements OnInit {
  countries;
  columnsDefs: any[];
  rowData: any[];
  constructor() {}

  ngOnInit() {
    this.countries = [];
    this.columnsDefs = [
      { field: 'ali_dia', headerName: 'Alimentaci&oacute;n <br>por d&iacute;a', editable: true, width: '104', sortable: true },
      { field: 'ali_type', headerName: 'Tipo de alimento', width: '174', editable: false},
      { field: 'ali_hec', headerName: 'Alimentaci&oacute;n <br>por hectarea', width: '175', editable: false},
      { field: 'ali_peso', headerName: 'Peso',  width: '104', editable: true},
      { field: 'ali_inc', headerName: 'Incremento <br>acumulado', width: '100', editable: false},
      { field: 'ali_sup', headerName: 'Supervivencia', width: '100', editable: true},
      { field: 'ali_blo', headerName: 'Blomasa por hect&aacute;rea',  width: '100', editable: false}
    ];

    this.rowData = [
      {
        ali_dia: '12.34',
        ali_type: '-',
        ali_hec: '-',
        ali_peso: '12.34',
        ali_inc: '12.34',
        ali_sup: '12.34',
        ali_blo: '12.34',
      },
      {
        ali_dia: '12.34',
        ali_type: '-',
        ali_hec: '-',
        ali_peso: '12.34',
        ali_inc: '12.34',
        ali_sup: '12.34',
        ali_blo: '12.34',
      },
      {
        ali_dia: '12.34',
        ali_type: '-',
        ali_hec: '-',
        ali_peso: '12.34',
        ali_inc: '12.34',
        ali_sup: '12.34',
        ali_blo: '12.34',
      }
    ];
    console.log(this.rowData);
  }
}
