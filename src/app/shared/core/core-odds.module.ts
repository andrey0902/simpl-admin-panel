import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthCoreService } from './services/auth-core.service';
import { AuthGuard } from './guard/auth-guard.service';
import { ProfileService } from './services/profile.service';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    AuthCoreService,
    AuthGuard,
    ProfileService

  ]
})
export class CoreOddsModule { }
