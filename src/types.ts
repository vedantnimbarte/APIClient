/**
 * A configuration object for an HTTP service.
 *
 * @interface TServiceConfig
 */
export type TServiceConfig = {
  /**
   * The base URL for the service.
   *
   * @property baseURL
   * @type {string}
   */
  baseURL: string;

  /**
   * The timeout for HTTP requests made to the service.
   *
   * @property timeout
   * @type {number}
   * @default 10000
   */
  timeout?: number;

  /**
   * The headers to send with every HTTP request made to the service.
   *
   * @property headers
   * @type {{[key: string]: string}}
   * @default {}
   */
  headers?: {
    [key: string]: string;
  };
};
