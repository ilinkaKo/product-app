import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TitleComponent } from './components/title/title.component'
import { TranslateModule } from '@ngx-translate/core';
import {CardModule} from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';
import {DropdownModule} from 'primeng/dropdown';
import {ConfirmDialogModule} from 'primeng/confirmdialog';

const COMPONENTS = [TitleComponent];

const MODULES = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  TranslateModule,
  CardModule,
  ButtonModule,
  InputTextModule,
  CalendarModule,
  DropdownModule,
  ConfirmDialogModule
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [...MODULES],
  exports: [...MODULES, ...COMPONENTS],
})
export class SharedModule {}
