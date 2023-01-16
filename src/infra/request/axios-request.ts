import axios, { AxiosInstance } from 'axios';
import { serialize } from 'object-to-formdata';

import { Request } from '@/data/contracts';

export class AxiosRequest implements Request {
  instance: AxiosInstance;

  constructor() {
    this.instance = axios.create();
  }

  async post(params: Request.RequestData<any>): Promise<any> {
    const headers: any = {};
    if (params.bearerToken) headers.Authorization = params.bearerToken;
    const data = this.parseData(params.data, params.dataAs || 'json');
    return this.instance.post(params.uri, data, { headers });
  }

  async put(params: Request.RequestData<any>): Promise<any> {
    const headers: any = {};
    if (params.bearerToken) headers.Authorization = params.bearerToken;
    const data = this.parseData(params.data, params.dataAs || 'json');
    return this.instance.post(params.uri, data, { headers }).then(response => {
      return response.data;
    });
  }

  async get(params: Request.RequestData<any>): Promise<any> {
    const headers: any = {};
    if (params.bearerToken) headers.Authorization = params.bearerToken;
    return this.instance
      .get(params.uri, {
        headers,
        params: params.data ? this.parseData(params.data, 'params') : undefined,
      })
      .then(response => {
        return response.data;
      });
  }

  async delete(params: Request.RequestData<any>): Promise<any> {
    const headers: any = {};
    if (params.bearerToken) headers.Authorization = params.bearerToken;
    return this.instance
      .delete(params.uri, {
        headers,
        params: params.data ? this.parseData(params.data, 'params') : undefined,
      })
      .then(response => {
        return response.data;
      });
  }

  parseData<T extends object>(
    data: T,
    type: 'json' | 'params' | 'formdata',
  ): any {
    switch (type) {
      case 'formdata':
        return serialize(data || {});
      case 'params':
        const params = new URLSearchParams(); // eslint-disable-line
        Object.entries(data).forEach(([k, v]) => {
          return params.append(k, v);
        });
        return params;
      default:
        return data;
    }
  }
}
