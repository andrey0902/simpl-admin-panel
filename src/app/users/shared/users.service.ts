import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/internal/operators';
import { Observable, of } from 'rxjs/index';
import { UserTable } from '../../shared/models/user-table.model';
import { DataResponse } from './model/data-response.mode';
import { UserModel } from '../../shared/core/models/user.model';
import { DetailUserModel } from '../../shared/core/models/detail-user-model';

@Injectable()
export class UsersService {
  data = 'Пользователи, емаил, дата регистрации, дата верификации емаила, тарифный план,\n' + 'дата последнего посещения сайта.'
  tempUser = {
    'id': 25,
    'name': 'tatard519',
    'email': 'tatard519@gmail.com',
    "registration_time": "2018-04-20T15:00:00Z",
    "email_verification_time": "2018-04-20T15:00:00Z",
    "last_activity_time": "2018-04-20T15:00:00Z",
    'account': {
      'currency': 'GBP',
      'address': null,
      'city': null,
      'zip': null,
      'country': null,
      'province': null
    },
    'current_plan': {
      'id': 6,
      'is_cancelled': true,
      'is_trial': false,
      'ended_at': '2019-02-08T10:54:59.000Z',
      'is_active': false,
      'plan':
        {
          'id': 1,
          'name': 'Silver Monthly',
          'alias_name': 'silver_monthly',
          'amount': 2000,
          'period': 'month'
        },
      'next_plan': null
    },
    'next_plan': null,
    'history_plans':  [
      {'id': 2, 'name': 'Gold Monthly', 'alias_name': 'gold_monthly', 'amount': 4000, 'period': 'month'},
      {'id': 2, 'name': 'Gold Monthly', 'alias_name': 'gold_monthly', 'amount': 4000, 'period': 'month'},
      {'id': 2, 'name': 'Gold Monthly', 'alias_name': 'gold_monthly', 'amount': 4000, 'period': 'month'}
    ]
  };
  constructor(private http: HttpClient) { }

  getUsers(params?: any): Observable<DataResponse> {
    console.warn('params', params);
   return this.http.get('./assets/mock-data.json', {params: this.params(params)})
      .pipe(
        map((res: any) => {
          return new DataResponse(
             res.count,
             this.prepareUsers(res.results)
          );
        })
      );
  }

  prepareUsers(users: any[]): UserModel[] {
    return users.map(user => {
      return new UserModel(user);
    });
  }

  getCurrentUser(id) {
    // return this.http.get(`url/${id}`)
    //   .pipe(map((res) => {
    //     return new some data();
    //   }));
    return of(new DetailUserModel(this.tempUser));
  }

  public params(filters) {
    if (filters) {
      let params: any = new HttpParams();
      for (const property in filters) {
        if (
          filters.hasOwnProperty(property) &&
          (filters[property] !== null && filters[property] !== '' && filters[property] !== undefined )
        ) {
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
}
