import { Plan } from './subscription-model';
import { Account } from './user.model';
import * as moment from 'moment';

export class DetailUserModel {
  public id: number;
  public name: string;
  public email: string;
  public registrationDate?: string;
  public verificationDate?: string;
  public lastActive?: string;
  public account: Account;
  public currentPlan: CurrentPlan;
  public nextPlan: Plan;
  public historyPlans: Plan[];

  constructor(data) {
    this.id = data.id ? data.id : null;
    this.name = data.name ? data.name : null;
    this.email = data.email ? data.email : null;
    this.account = data.account ?  new Account(data.account) : null;
    this.currentPlan = data.current_plan ? new CurrentPlan(data.current_plan) : null;
    this.nextPlan = data.next_plan ? new Plan(data.next_plan) : null;
    this.historyPlans = data.history_plans ? this.prepareHistory(data.history_plans) : null;
    this.nextPlan = data.next_plan ? new Plan(data.next_plan) : null;
    this.registrationDate = data.registration_time;
    this.verificationDate = data.email_verification_time;
    this.lastActive = data.last_activity_time;
  }

  prepareHistory(data: any[]) {
    return data.map(item => new Plan(item));
  }
}

export class CurrentPlan {
  public id: number;
  public endTime: string;
  public plan: Plan;
  public cancelled: boolean;
  public trial: any;
  public nextPlan: any;
  public active: boolean;
  public today: string;

  constructor(data) {
    this.id = data.id;
    this.endTime = moment(data.ended_at).format('MMM DD, YYYY');
    this.plan = data.plan ? new Plan(data.plan) : null;
    this.cancelled = this.checkedCancelled(data);
    this.trial = data.is_trial;
    this.nextPlan = data.next_plan ? new Plan(data.next_plan) : null;
    this.active = data.is_active;
    this.today = moment().format('MMM DD, YYYY');
  }

  public checkedCancelled(data) {
    if (data.next_plan) {
      return false;
    }
    return data.is_cancelled;
  }
}
