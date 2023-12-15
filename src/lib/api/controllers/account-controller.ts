import { ApiControllerBase } from '@lib/api/bases';
import { AxiosInstance } from 'axios';
import { LockerModel } from '@lib/api/types';
import { BaseProcessedError, LoginResponseType, User } from '@lib/api/models';

export class AccountController extends ApiControllerBase {
  constructor(client: AxiosInstance, locker: LockerModel) {
    super(client, locker, 'account');
  }

  async getMe(
    onSuccess?: (model: User) => void,
    onError?: (error: BaseProcessedError) => void
  ) {
    return this.process(this.get('me'), onSuccess, onError);
  }
}
