import { ApiControllerBase } from '@lib/api/bases';
import { LockerModel } from '@lib/api/types';
import { AxiosInstance } from 'axios';
import { ImageModel } from '@lib/api/models2';
import { BaseProcessedError } from '@lib/api/models';

export class FileController extends ApiControllerBase {
  constructor(client: AxiosInstance, locker: LockerModel) {
    super(client, locker, 'storage');
  }

  async upload(
    data: FormData,
    onSuccess?: (model: ImageModel) => void,
    onError?: (error: BaseProcessedError) => void
  ): Promise<ImageModel> {
    return await this.process<ImageModel>(
      this.post('upload', {
        data,
        headers: { 'Content-Type': 'multipart/form-data' },
      }),
      onSuccess,
      onError
    );
  }
}
