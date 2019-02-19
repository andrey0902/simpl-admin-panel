import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppCanLoadService } from './shared/core/services/app-can-load.service';

const routes: Routes = [

  {
    path: '',
    canLoad: [AppCanLoadService],
    // loadChildren: './users/users.module#UsersModule'
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
