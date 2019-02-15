import * as moment from 'moment';

export class SubscriptionModel {
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
    this.plan = data.current_plan ? new Plan(data.current_plan) : null;
    this.cancelled = this.checkedCancelled(data);
    this.trial = data.is_trial;
    this.nextPlan = data.next_plan ? new Plan(data.next_plan) : null;
    this.active = data.is_active;
    this.today = moment().format('MMM DD, YYYY');
  }

  public get shortName() {
    if (this.plan.name) {
      return this.plan.name.split(' ')[0];
    }
  }

  public get period() {
    if (this.plan && this.plan.name) {
      return this.plan.name.split(' ')[1];
    }
  }

  public get updateTitle() {
    if (this.plan && this.plan.name) {
      const temArr = this.plan.name.split(' ');
      temArr[1] = temArr[1].toLowerCase();
      return temArr.join(' ');
    }
    return '';
  }

  public get cost() {
    return this.plan.amount / 100;
  }

  public checkedCancelled(data) {
    if (data.next_plan) {
      return false;
    }
    return data.is_cancelled;
  }
}

export class Plan {
  id: number;
  name: string;
  alias: string;
  amount: number;
  period: string;

  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.amount = data.amount;
    this.period = data.period;
    this.alias = data.alias_name;
  }
}
