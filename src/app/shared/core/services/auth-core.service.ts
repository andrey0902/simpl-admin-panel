
import {map, mergeMap, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { SessionService } from './session-service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ProfileService } from './profile.service';
import { UserModel } from '../models/user.model';
import { Router } from '@angular/router';
import { ConfigService } from '../configs/config.service';


@Injectable()
export class AuthCoreService {
  public socialType = null;
  public userSocialToken = null;
  constructor(private http: HttpClient,
              private profileService: ProfileService,
              private router: Router) {
    this.profileService.user = this.getUser();
  }

  public isLogin(): boolean {
    return !!SessionService.getUser() && SessionService.getKey();
  }

  public login(data) {
    return this.http.post(ConfigService.signInPath, data).pipe(
      tap((response: any) => {
        this.setStorage(response.data);
        this.profileService.profileSource.next(new UserModel(response.data));
        //  TODO need create method login with server and handler for add user for profile service
        this.profileService.user = this.getUser();
      }));
  }

  public logOut() {
    SessionService.setUser(null);
    SessionService.setKey(null);
    this.router.navigate(['/auth/sign-in']);
  }

  public getUser() {
    const user = SessionService.getUser();
    return user ? new UserModel(user) : null;
  }

  public getToken(): string {
    // TODO: need write method for checked user when start app!!!!
    return  SessionService.getKey() ? SessionService.getKey() : null;
  }

  public signUp(data: any) {
   return this.http.post(`${ConfigService.registrationPath}`, data).pipe(
     map((response: any) => response.data));
  }

  public sendVerifyEmail(params) {
    return this.http.get(ConfigService.confirmEmailPath, {params: this.params(params)});
  }

  public resendEmail(email) {
    return this.http.post(ConfigService.resendConfirmationEmailPath, {email});
  }

  public resetPassword(email) {
    return this.http.post(ConfigService.resetPasswordPath, email );
  }

  public checkedAccess(params: any) {
    return this.http.get(ConfigService.checkedAccessPath, {params: this.params(params)});
  }

  public sendNewPassword(password, params: any) {
    return this.http.put(ConfigService.resetPasswordPath, {password}, {params: this.params(params)});
  }

  public sendGoogleData(data) {
    return this.http.post(ConfigService.googlePath, data)
      .pipe(tap((response: any) => {
        this.setStorage(response.data);
        this.profileService.profileSource.next(new UserModel(response.data));
        this.profileService.user = this.getUser();
      })).pipe(
      map(response => response));
  }

  public sendFacebookData(data) {
    return this.http.post(ConfigService.facebookPath, data)
      .pipe(tap((response: any) => {

        this.setStorage(response.data);

        this.profileService.profileSource.next(new UserModel(response.data));

        this.profileService.user = this.getUser();
      })).pipe(
      map(response => response));
  }

  public params(filters) {
    if (filters) {
      let params: any = new HttpParams();
      for (const property in filters) {
        if (filters.hasOwnProperty(property) && filters[property] !== null) {
          if (Array.isArray(property)) {
            filters[property].forEach((element) => {
              params = params.append(property, element);
            });
          } else {
            params = params.append(property, filters[property]);
          }
        }
      }
      return params;
    }
  }

  public setStorage(data) {
    SessionService.setUser(data);
    SessionService.setKey(data.access_token);
  }

  private checkExistUser(token) {
    return this.http.get(ConfigService.existingUserPath, {params: token})
      .pipe(map((response: any) => response.data.exist));
  }

}

