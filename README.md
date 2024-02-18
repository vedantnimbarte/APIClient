# APIClient

APIClient - Flexible API Client for JavaScript

This package provides a simple and consistent interface for making HTTP requests to various services. It abstracts away the underlying implementation details and allows for easy registration of services with their own configurations.

## Installation

You can install this package via npm:

```bash
npm install @vedantnimbarte/http-client
```

## Usage

```javascript
import { HttpClient } from '@your-package/http-client';

// Instantiate the HttpClient
const httpClient = HttpClient.getInstance();

// Register a service
httpClient.registerService('exampleService', {
  baseURL: 'https://api.example.com',
  timeout: 5000,
});

// Make a request
const response = await httpClient.makeRequest('exampleService', {
  method: 'GET',
  url: '/endpoint',
});

console.log(response.data);
```

## API

```javascript
registerService(serviceName: string, config: TServiceConfig)
```

Registers a new service with the HttpClient class.

- serviceName: The name of the service to register.
- config: The configuration for the service.

```javascript
makeRequest<T>(serviceName: string, request: AxiosRequestConfig): Promise<T>
```

Makes an HTTP request using the specified service name.

- serviceName: The name of the service to use.
- request: The request configuration object.

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.
License

This package is licensed under the GNU GENERAL PUBLIC [License](./LICENSE). See the LICENSE file for details.
