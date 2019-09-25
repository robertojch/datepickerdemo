import { Component, OnInit, Input, Output, EventEmitter, ViewChildren, QueryList, ElementRef } from '@angular/core';

@Component({
  selector: 'app-custom-dropdown',
  templateUrl: './custom-dropdown.component.html',
  styleUrls: ['./custom-dropdown.component.scss']
})
export class CustomDropdownComponent implements OnInit {

  @Input() placeholder: string;
  @Input() list: Array<any>;
  @Input() selectedId: number;
  @Output() itemchange  = new EventEmitter<any>();

  //@ViewChildren('listItems') listItems: QueryList<ElementRef>;

  selectedItem: any = {
    shortDescription: '',
    largeDescription: ''
  };

  constructor() {

  }

  ngOnInit() {
 

    this.placeholder = this.placeholder ? this.placeholder : 'Eliga una opcion';
    const filtered = this.list.find(item => item.id === this.selectedId);
    if (filtered) {
      this.selectedItem = {
        shortDescription: filtered.text,
        largeDescription: filtered.text
      };
    } else {
      this.selectedItem = {
        shortDescription: this.placeholder,
        largeDescription: this.placeholder
      };
    }
  }
  
  onselected(item: any) {

    this.selectedItem = {
      shortDescription: item.text.length > 18 ? `${item.text.slice(0, 18)}...` : item.text,
      largeDescription: item.text
    };
    console.log('selectedItem', item);
    this.itemchange.emit(item);

  }

  stringify(item) {
    return JSON.stringify(item);
  }

}
