import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { DEFAULT_PERFECT_SCROLLBAR_CONFIG, UsersTableModule } from './users-table/users-table.module';
import { MatButtonModule, MatDialogModule } from '@angular/material';
import { UserDetailsComponent } from './user-details/user-details.component';
import { MomentModule } from 'ngx-moment';
import { PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarModule } from 'ngx-perfect-scrollbar';




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
    MatButtonModule,

    MomentModule,
    PerfectScrollbarModule,
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  entryComponents: [
    UserDetailsComponent
  ]
})
export class UsersModule { }
