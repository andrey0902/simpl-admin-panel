import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UsersTableComponent } from './users-table/users-table/users-table.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: UsersComponent,
        children: [
          {
            path: 'users',
            component: UsersTableComponent
          }
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class UsersRoutingModule { }
