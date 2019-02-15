import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material';
import { TableSearchComponent } from './table-search.component';

@NgModule({
  declarations: [
    TableSearchComponent
  ],
  exports: [
    TableSearchComponent
  ],
  imports: [
    CommonModule,

    MatInputModule,

    ReactiveFormsModule,
  ]
})
export class TableSearchModule { }
