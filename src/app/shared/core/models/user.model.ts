import { Plan } from './subscription-model';

export class UserModel {
  id?: number;
  name: string;
  email: string;
  access_token: string;
  account: Account;
  public plan: Plan;
  public nextPlan: Plan;
  public registrationDate?: string;
  public verificationDate?: string;
  public lastActive?: string;
  public role: string;

  constructor(data) {
    this.id = data.id ? data.id : null;
    this.name = data.name ? data.name : null;
    this.email = data.email ? data.email : null;
    this.access_token = data.access_token ? data.access_token : null;
    this.account = data.account ?  new Account(data.account) : null;
    this.plan = data.current_plan ? new Plan(data.current_plan) : null;
    this.nextPlan = data.next_plan ? new Plan(data.next_plan) : null;
    this.registrationDate = data.registration_time;
    this.verificationDate = data.email_verification_time;
    this.lastActive = data.last_activity_time;
    this.role = data.role;
  }
}

export class Account {
  currency: string;
  address: string ;
  city: any;
  province: string;
  zip: number;
  country: string;

  constructor(data) {
    this.currency =  data.currency ? data.currency : '';
    this.address = data.address ? data.address : '';
    this.city = data.city ? data.city : '';
    this.province = data.province ? data.province : '';
    this.zip = data.zip ? data.zip : '';
    this.country = data.country ? data.country : '';
  }
}
