import axios, { AxiosInstance } from 'axios';
import { TServiceConfig } from './types';

export class HttpClient {
  private static instance: HttpClient | null = null;
  private services: Map<string, AxiosInstance> = new Map();

  private constructor() {}

  public static getInstance(): HttpClient {
    if (!HttpClient.instance) {
      HttpClient.instance = new HttpClient();
    }
    return HttpClient.instance;
  }

  registerService(serviceName: string, config: TServiceConfig) {
    const instance = axios.create(config);
    this.services.set(serviceName, instance);
  }
}
