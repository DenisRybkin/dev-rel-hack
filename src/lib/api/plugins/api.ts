import { AxiosInstance } from 'axios';
import { LockerModel } from '@/lib/api/types';
import { mutexLocker } from '@/lib/api/plugins/locker';
import { AuthController } from '@/lib/api/controllers';
import { client } from '@/lib/api/plugins/client';
import { AccountController } from '@lib/api/controllers/account-controller';
import { CompanyController } from '@lib/api/controllers/company-controller';
import { FileController } from '@lib/api/controllers/file-controller';

class Api {
  readonly auth: AuthController;
  readonly account: AccountController;
  readonly company: CompanyController;
  readonly file: FileController;

  constructor(client: AxiosInstance, locker: LockerModel) {
    this.auth = new AuthController(client, locker);
    this.account = new AccountController(client, locker);
    this.company = new CompanyController(client, locker);
    this.file = new FileController(client, locker);
  }
}
export const api = new Api(client, mutexLocker);
