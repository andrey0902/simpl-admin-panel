import { Injectable } from '@angular/core';
import { CanLoad } from '@angular/router';
import { Observable } from 'rxjs';
import { ProfileService } from './profile.service';
import { map, take } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';

export enum Roles {
  admin = 'admin',
  user = 'user'
}

@Injectable({
  providedIn: 'root'
})
export class AppCanLoadService implements CanLoad {

  constructor(public profileService: ProfileService) { }

  canLoad(): Observable<boolean> | Promise<boolean> | boolean {
    return this.profileService.profileSource$
      .pipe(
        take(1),
        map((user) => {
          if (user && user.role === Roles.admin) {
            return true;
          } else {
            window.location.href = environment.redirectPath;
            return false;
          }
        })
      );
  }
}
