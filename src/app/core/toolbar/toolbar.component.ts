import { Component, Input, OnInit } from '@angular/core';
import { ToolbarHelpers } from './toolbar.helpers';
import { ProfileService } from '../../shared/core/services/profile.service';
import { AuthCoreService } from '../../shared/core/services/auth-core.service';

@Component({
  selector: 'cdk-toolbar', templateUrl: './toolbar.component.html', styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Input() sidenav;
  @Input() sidebar;
  @Input() drawer;
  @Input() matDrawerShow;

  searchOpen = false;
  toolbarHelpers = ToolbarHelpers;

  constructor(public profileService: ProfileService, public authCoreService: AuthCoreService) {
  }

  ngOnInit() {
  }

  getUser$() {
    return this.profileService.profileSource$;
  }

  logOut() {
    this.authCoreService.logOut();
  }

}
