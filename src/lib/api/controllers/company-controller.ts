import { ApiControllerBase } from '@lib/api/bases';
import { AxiosInstance } from 'axios';
import { LockerModel } from '@lib/api/types';
import { CompanyCreateDto, CompanyModel } from '@lib/api/models2';
import { BaseProcessedError, LoginResponseType } from '@lib/api/models';

export class CompanyController extends ApiControllerBase {
  constructor(client: AxiosInstance, locker: LockerModel) {
    super(client, locker, 'company');
  }

  async create(
    dto: CompanyCreateDto,
    onSuccess?: (model: CompanyCreateDto) => void,
    onError?: (error: BaseProcessedError) => void
  ) {
    return await this.process(
      this.post<CompanyCreateDto>('', { data: dto }),
      onSuccess,
      onError
    );
  }

  async getAll(
    onSuccess?: (model: CompanyModel[]) => void,
    onError?: (error: BaseProcessedError) => void
  ) {
    return await this.process(this.get(''), onSuccess, onError);
  }

  async own(
    onSuccess?: (model: CompanyModel) => void,
    onError?: (error: BaseProcessedError) => void
  ) {
    return await this.process(this.get('own'), onSuccess, onError);
  }
}
