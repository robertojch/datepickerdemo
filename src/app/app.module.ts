import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderDatepickerComponent } from './header-datepicker/header-datepicker.component';
import { FormsModule} from '@angular/forms';
import { CustomDropdownComponent } from './custom-dropdown/custom-dropdown.component';
import { BsDropdownModule } from 'ngx-bootstrap';
import { CustomTableComponent } from './custom-table/custom-table.component';
import {NgxMaskModule, IConfig} from 'ngx-mask';
import { EmojiDirective } from './emoji.directive';

import { OnlyNumbersDirective } from './only-numbers.directive';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;
@NgModule({
  declarations: [
    AppComponent,
    HeaderDatepickerComponent,
    CustomDropdownComponent,
    CustomTableComponent,
    EmojiDirective,
    
    OnlyNumbersDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    NgxMaskModule.forRoot(options)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
