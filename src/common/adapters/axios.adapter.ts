/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { HttAdapter } from '../interfaces/http-adapter.interface';
import axios, { AxiosInstance } from 'axios';
@Injectable()
export class AxiosAdapter implements HttAdapter {
  private axios: AxiosInstance = axios;
  async get<T>(url: string): Promise<T> {
    try {
      const { data } = await this.axios.get<T>(url);
      return data;
    } catch (error) {
      throw new Error(`This is an error - Check the logs- ${error}`);
    }
  }
}
