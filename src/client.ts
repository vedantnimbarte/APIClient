import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { TServiceConfig } from './types';

/**
 * A singleton class for making HTTP requests.
 *
 * This class provides a consistent and easy-to-use interface for making HTTP requests, regardless of the underlying implementation.
 * It also supports registering multiple services, each with its own configuration.
 */
export class HttpClient {
  /**
   * The singleton instance of the HttpClient class.
   */
  private static instance: HttpClient | null = null;

  /**
   * A map of service names to Axios instances.
   */
  private services: Map<string, AxiosInstance> = new Map();

  /**
   * The constructor is private to enforce the singleton pattern.
   */
  private constructor() {}

  /**
   * Gets the singleton instance of the HttpClient class.
   *
   * @returns The HttpClient instance.
   */
  public static getInstance(): HttpClient {
    if (!HttpClient.instance) {
      HttpClient.instance = new HttpClient();
    }
    return HttpClient.instance;
  }

  /**
   * Registers a new service with the HttpClient class.
   *
   * @param serviceName The name of the service to register.
   * @param config The configuration for the service.
   */
  registerService(serviceName: string, config: TServiceConfig) {
    const instance = axios.create(config);
    this.services.set(serviceName, instance);
  }

  /**
   * Makes an HTTP request using the specified service name.
   *
   * @param serviceName The name of the service to use.
   * @param request The request configuration object.
   * @returns A Promise that resolves to the response object.
   */
  async makeRequest<T>(serviceName: string, request: AxiosRequestConfig): Promise<T> {
    const service = this.services.get(serviceName);
    if (!service) {
      throw new Error(`Service "${serviceName}" is not registered.`);
    }

    return service.request<T>(request);
  }
}
