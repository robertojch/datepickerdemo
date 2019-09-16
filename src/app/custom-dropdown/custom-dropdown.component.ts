import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-dropdown',
  templateUrl: './custom-dropdown.component.html',
  styleUrls: ['./custom-dropdown.component.scss']
})
export class CustomDropdownComponent implements OnInit {


  items: string[] = [
    'The first choice!',
    'And another choice for you.',
    'but wait! A third!',
    'The first choice!',
    'And another choice for you.',
    'but wait! A third!',
    'The first choice!',
    'And another choice for you.',
    'but wait! A third!'
  ];

  constructor() { }

  ngOnInit() {
  }

  onHidden(): void {
    console.log('Dropdown is hidden');
  }
  onShown(): void {
    console.log('Dropdown is shown');
  }
  isOpenChange(): void {
    console.log('Dropdown state is changed');
  }

}
