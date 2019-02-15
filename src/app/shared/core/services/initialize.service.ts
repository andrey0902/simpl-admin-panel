import { ProfileService } from './profile.service';
import { SessionService } from './session-service';


export function loadConfig(profileService: ProfileService) {
  return (): Promise<any> => {
    return new Promise((resolve, reject) => {
      if (SessionService.getKey()) {
        profileService
          .getUserAccount()
          .subscribe(val => {
            resolve(val);
          });
      } else {
        resolve();
      }
    });
  };
}
