import { environment } from '../../../../environments/environment';

export class ConfigService {
  public static basePath: string = environment.basePath;
  public static basePathApi: string = environment.basePathApi;
  public static socketPath: string = environment.WS;

  public static registrationPath = `${ConfigService.basePathApi}v1/users/sign_up`;
  public static confirmEmailPath = `${ConfigService.basePathApi}v1/users/confirmation`;
  public static resendConfirmationEmailPath = `${ConfigService.basePathApi}v1/users/confirmation`;
  public static signInPath = `${ConfigService.basePathApi}v1/users/sign_in`;
  public static resetPasswordPath = `${ConfigService.basePathApi}v1/users/password`;
  public static checkedAccessPath = `${ConfigService.basePathApi}v1/users/password/check_reset_token`;
  public static googlePath = `${ConfigService.basePathApi}v1/auth/google/request`;
  public static facebookPath = `${ConfigService.basePathApi}v1/auth/facebook/request`;
  public static userDataPath = `${ConfigService.basePathApi}v1/account`;
  public static countriesPath = `${ConfigService.basePathApi}v1/countries`;
  public static provinciesPath = `${ConfigService.basePathApi}v1/countries/provincies`;
  public static cardsPath = `${ConfigService.basePathApi}v1/cards`;
  public static subscriptionsPath = `${ConfigService.basePathApi}v1/membership`;
  public static bookmakersPath = `${ConfigService.basePathApi}v1/bookmakers`;
  public static marketsPath = `${ConfigService.basePathApi}v1/markets`;
  public static filtersPath = `${ConfigService.basePathApi}v1/filters`;
  public static feedsPath = `${ConfigService.basePathApi}v1/feeds`;
  public static contactUsPath = `${ConfigService.basePathApi}v1/sender/contact_form`;
  public static paymentDatePath = `${ConfigService.basePathApi}v1/membership/billing_date`;
  public static existingUserPath = `${ConfigService.basePathApi}v1/auth/exist_user`;
}
