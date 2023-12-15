import { AxiosInstance } from 'axios';
import { LockerModel } from '@/lib/api/types';
import { mutexLocker } from '@/lib/api/plugins/locker';
import { AuthController } from '@/lib/api/controllers';
import { client } from '@/lib/api/plugins/client';
import { AccountController } from '@lib/api/controllers/account-controller';

class Api {
  readonly auth: AuthController;
  readonly account: AccountController;

  constructor(client: AxiosInstance, locker: LockerModel) {
    this.auth = new AuthController(client, locker);
    this.account = new AccountController(client, locker);
  }
}
export const api = new Api(client, mutexLocker);
