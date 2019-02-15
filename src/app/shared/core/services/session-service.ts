
export class SessionService {
  /**
   * set user in local storage
   * */
  public static setUser(value: any): void {
    localStorage.setItem('odds.user', JSON.stringify(value) );
  }
  /**
   * get user from local storage
   * */
  public static getUser() {
    console.log('getUser', localStorage.getItem('odds.user'));
    return JSON.parse(localStorage.getItem('odds.user'));
  }

  /**
   * set user in local storage
   * */
  public static setKey (value: any): void {
    SessionService.setStore(value, 'odds.key');
  }
  /**
   * get user from local storage
   * */
  public static getKey() {
    return SessionService.getStore('odds.key');
  }

  public static setTermsCookies(value: any): void {
    SessionService.setStore(value, 'odds.cookies');
  }

  public static getTermsCookies() {
    return SessionService.getStore('odds.cookies');
  }

  public static setStore(value, key: string) {
    localStorage.setItem(key, JSON.stringify(value) );
  }

  public static getStore(key: string) {
    return JSON.parse(localStorage.getItem(key));
  }
}
