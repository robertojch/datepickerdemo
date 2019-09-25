import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-dropdown',
  templateUrl: './custom-dropdown.component.html',
  styleUrls: ['./custom-dropdown.component.scss']
})
export class CustomDropdownComponent implements OnInit {

  selectedItem: any = {
    shortDescription: '',
    largeDescription: ''
  };

  items: string[] = [
    '1The first choice!',
    '2And another choice for you.',
    '3but wait! A third!',
    '4The first choice!',
    '5And another choice for you.',
    '6but wait! A third!',
    '7The first choice!',
    '8And another choice for you.',
    '9but wait! A third!',
    '10The first choice!',
    '11And another choice for you.',
    '12but wait! A third!',
    '13The first choice!',
    '14And another choice for you.',
    '15but wait! A third!',
    '16The first choice!',
    '17And another choice for you.',
    '18 but wait! A third!'
  ];

  constructor() { }

  ngOnInit() {

    this.selectedItem = {
      shortDescription: 'Elige una opción',
      largeDescription: 'Elige una opción'
    };
  }

  onHidden(): void {
    console.log('Dropdown is hidden');
  }
  onShown(): void {
    console.log('Dropdown is shown');
  }
  isOpenChange(event): void {
    console.log(event);
    console.log('Dropdown state is changed', event);
  }
  onselected(data: string) {


//const item = JSON.parse(hightLightItem.nativeElement.getAttribute('data-dd-value'));


    this.selectedItem = {
      shortDescription: data.length > 10 ? `${data.slice(0, 10)}...` : data,
      largeDescription: data
    };
    console.log('selectedItem', this.selectedItem);
  }

  stringify(item) {
    return JSON.stringify(item);
  }

}
