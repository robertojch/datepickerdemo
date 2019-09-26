import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { NgControl, NgModel } from '@angular/forms';

@Directive({
  selector: 'input[appOnlyNumbers]'
})
export class OnlyNumbersDirective {
  @Output() ngModelChange = new EventEmitter();

  constructor(private el: ElementRef, public ngModel: NgModel) {}

  @HostListener('ngModelChange', ['$event']) onModelChange(event) {
    debugger;
    const initalValue = this.el.nativeElement.value;
    this.el.nativeElement.value = initalValue.replace(/[^0-9]*/g, '');
    if (initalValue !== this.el.nativeElement.value) {
      this.ngModel.update.emit(this.el.nativeElement.value);
    }
  }
}

//Directive not updating model
//after that we need tovalidate the range of 0-1000