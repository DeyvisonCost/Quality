
import { ReqError } from '../types';
import { parseError } from './parseError';

export class RequestError<Data = any> extends Error implements ReqError<Data> {
  data: Data;
  status: number;

  constructor(e: Error) {
    super('REQUEST_ERROR');

    const { data, status } = parseError(e);

    this.data = data;
    this.status = status;
  }
}
