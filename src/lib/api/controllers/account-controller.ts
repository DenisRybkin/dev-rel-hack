import { ApiControllerBase } from '@lib/api/bases';
import { AxiosInstance } from 'axios';
import { LockerModel } from '@lib/api/types';
import { BaseProcessedError, LoginResponseType, User } from '@lib/api/models';
import { TokenDto } from '@lib/api/models2';

export class AccountController extends ApiControllerBase {
  constructor(client: AxiosInstance, locker: LockerModel) {
    super(client, locker, 'account');
  }

  async getMe(
    onSuccess?: (model: TokenDto) => void,
    onError?: (error: BaseProcessedError) => void
  ) {
    return this.process(this.get('me'), onSuccess, onError);
  }
}
