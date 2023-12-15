import { ApiControllerBase } from '@/lib/api/bases';
import { AxiosInstance } from 'axios';
import { LockerModel } from '@/lib/api/types';
import {
  BaseProcessedError,
  CreateUserDto,
  LoginDto,
  LoginResponseType,
} from '@lib/api/models';
import { RegisterDto, TokenDto } from '@lib/api/models2';

export class AuthController extends ApiControllerBase {
  constructor(client: AxiosInstance, locker: LockerModel) {
    super(client, locker, 'auth');
  }

  async refresh(
    onSuccess?: (model: LoginResponseType) => void,
    onError?: (error: BaseProcessedError) => void
  ): Promise<LoginResponseType> {
    return await this.process<LoginResponseType>(
      this.post<LoginResponseType>('refresh'),
      onSuccess,
      onError,
      true
    );
  }

  async login(
    dto: LoginDto,
    onSuccess?: (model: TokenDto) => void,
    onError?: (error: BaseProcessedError) => void
  ): Promise<TokenDto> {
    return await this.process(
      this.post<TokenDto>('login', { data: dto }),
      onSuccess,
      onError
    );
  }

  async logout(
    onSuccess?: (model: boolean) => void,
    onError?: (error: BaseProcessedError) => void
  ) {
    return await this.process<boolean>(this.post('logout'), onSuccess, onError);
  }

  async registration(
    dto: RegisterDto,
    onSuccess?: (model: TokenDto) => void,
    onError?: (error: BaseProcessedError) => void
  ): Promise<TokenDto> {
    return await this.process(
      this.post('register', { data: dto }),
      onSuccess,
      onError
    );
  }
}
