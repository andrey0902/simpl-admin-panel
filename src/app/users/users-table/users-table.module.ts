import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersTableComponent } from './users-table/users-table.component';
import { PaginationModule } from '../../shared/pagination/pagination.module';
import { MatProgressSpinnerModule, MatSortModule, MatTableModule } from '@angular/material';
import { TableSearchModule } from '../../shared/table-search/table-search.module';
import { MomentModule } from 'ngx-moment';

@NgModule({
  declarations: [
    UsersTableComponent
  ],
  exports: [
    UsersTableComponent
  ],
  imports: [
    CommonModule,

    PaginationModule,
    TableSearchModule,

    MatTableModule,
    MatSortModule,
    MatProgressSpinnerModule,

    MomentModule,
  ]
})
export class UsersTableModule { }
