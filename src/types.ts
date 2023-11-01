export type TServiceConfig = {
  baseURL: string;
  timeout: number;
  headers: {
    [key: string]: string;
  };
};
