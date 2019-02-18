import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersTableComponent } from './users-table/users-table.component';
import { PaginationModule } from '../../shared/pagination/pagination.module';
import { MatProgressSpinnerModule, MatSortModule, MatTableModule } from '@angular/material';
import { TableSearchModule } from '../../shared/table-search/table-search.module';
import { MomentModule } from 'ngx-moment';
import {
  PERFECT_SCROLLBAR_CONFIG,
  PerfectScrollbarConfigInterface,
  PerfectScrollbarModule
} from 'ngx-perfect-scrollbar';

export const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

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
    PerfectScrollbarModule,
],
providers: [
  {
    provide: PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
  }
]
})
export class UsersTableModule { }
