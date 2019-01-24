import { UserTable } from '../../../shared/models/user-table.model';

export class DataResponse {
  count: number;
  users: UserTable[];


  constructor(count, users) {
    this.count = count;
    this.users = users;
  }
}
