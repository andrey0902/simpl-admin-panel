import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { UsersTableModule } from './users-table/users-table.module';
import { MatDialogModule } from '@angular/material';
import { UserDetailsComponent } from './user-details/user-details.component';




@NgModule({
  declarations: [
    UsersComponent,
    UserDetailsComponent
  ],
  exports: [
    UsersComponent
  ],
  imports: [
    CommonModule,

    UsersTableModule,

    MatDialogModule,
  ],
  entryComponents: [
    UserDetailsComponent
  ]
})
export class UsersModule { }
