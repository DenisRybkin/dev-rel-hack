import { ApiControllerBase } from '@lib/api/bases';
import { AxiosInstance } from 'axios';
import { LockerModel } from '@lib/api/types';
import { CompanyCreateDto, CompanyModel } from '@lib/api/models2';
import { BaseProcessedError } from '@lib/api/models';
import { EventCreateDto } from '../models2/models/EventCreateDto';
import { EventModel } from '../models2/models/EventModel';

export class EventController extends ApiControllerBase {
  constructor(client: AxiosInstance, locker: LockerModel) {
    super(client, locker, 'event');
  }

  async create(
    dto: EventCreateDto,
    onSuccess?: (model: EventCreateDto) => void,
    onError?: (error: BaseProcessedError) => void
  ) {
    return await this.process(
      this.post<EventCreateDto>('', { data: dto }),
      onSuccess,
      onError
    );
  }

  async getAll(
    onSuccess?: (model: EventModel[]) => void,
    onError?: (error: BaseProcessedError) => void
  ) {
    return await this.process(this.get(''), onSuccess, onError);
  }
  async getEventByID(
    id:number,
    onSuccess?: (model: EventModel[]) => void,
    onError?: (error: BaseProcessedError) => void
  ) {
    return await this.process(this.get(`${id}`), onSuccess, onError);
  }

  async getEventByIDJoin(
    id:number,
    onSuccess?: (model: EventModel[]) => void,
    onError?: (error: BaseProcessedError) => void
  ) {
    return await this.process(this.get(`${id}/join`), onSuccess, onError);
  }

  async own(
    onSuccess?: (model: CompanyModel) => void,
    onError?: (error: BaseProcessedError) => void
  ) {
    return await this.process(this.get('own'), onSuccess, onError);
  }
}
