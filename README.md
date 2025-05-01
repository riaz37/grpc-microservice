# gRPC Microservices Architecture

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

## Project Overview

This project demonstrates a modern microservices architecture using gRPC for inter-service communication. It consists of an API Gateway that serves as the entry point for client requests and communicates with backend microservices using gRPC protocol.

## Architecture

The application follows a microservices architecture pattern with the following components:

- **API Gateway**: Acts as the entry point for all client requests, exposing a RESTful API to clients while communicating with backend services via gRPC
- **Product Service**: A microservice responsible for product-related operations
- **Protocol Buffers**: Used to define service contracts and data structures

## What is gRPC?

gRPC is a high-performance, open-source universal RPC (Remote Procedure Call) framework developed by Google. Key features include:

- **Protocol Buffers**: Uses Protocol Buffers (protobuf) as the Interface Definition Language (IDL) for describing both the service interface and the structure of payload messages
- **HTTP/2**: Built on top of HTTP/2, providing features like bidirectional streaming, flow control, and multiplexing requests over a single connection
- **Cross-platform**: Supports multiple programming languages and platforms
- **Strongly typed**: Service contracts are strictly defined, enabling type checking at compile time
- **Efficient serialization**: Protocol Buffers provide efficient binary serialization, resulting in smaller payloads compared to JSON

## API Gateway and Microservices Interaction

```
┌─────────────┐                ┌─────────────────┐
│             │                │                 │
│   Client    │◄── REST API ──►│   API Gateway   │
│             │                │                 │
└─────────────┘                └────────┬────────┘
                                        │
                                        │ gRPC
                                        │
                                        ▼
                               ┌─────────────────┐
                               │                 │
                               │ Product Service │
                               │                 │
                               └─────────────────┘
```

### How it works:

1. **Client Request**: A client sends an HTTP request to the API Gateway
2. **API Gateway Processing**: The API Gateway receives the request, processes it, and determines which microservice should handle it
3. **gRPC Communication**: The API Gateway makes a gRPC call to the appropriate microservice
4. **Microservice Processing**: The microservice processes the request and returns a response via gRPC
5. **Response to Client**: The API Gateway transforms the gRPC response back to HTTP/JSON and sends it to the client

## Benefits of this Architecture

- **Clear Separation of Concerns**: Each microservice focuses on a specific business domain
- **Independent Deployment**: Services can be deployed independently
- **Technology Diversity**: Different services can use different technologies as needed
- **Scalability**: Services can be scaled independently based on demand
- **Performance**: gRPC provides high-performance communication between services
- **Type Safety**: Protocol Buffers ensure type safety across service boundaries

## Project Structure

```
my-workspace/
├── apps/
│   ├── api-gateway/           # API Gateway service (NestJS)
│   │   └── src/
│   │       └── app/
│   │           ├── product/   # Product controller for API Gateway
│   │           └── ...
│   └── products/              # Product microservice (NestJS)
│       └── src/
│           └── app/
│               ├── product.controller.ts  # gRPC service implementation
│               └── ...
├── proto/
│   └── products.proto         # Protocol Buffer definitions
├── types/
│   └── proto/                 # Generated TypeScript types from proto files
└── package.json
```


## Setup and Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd my-workspace
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Generate TypeScript types from Protocol Buffers:
   ```bash
   npm run proto:generate
   ```

## Running the Services

1. Start the Product microservice:
   ```bash
   npx nx serve products
   ```

2. Start the API Gateway:
   ```bash
   npx nx serve api-gateway
   ```

3. Access the API at:
   ```
   http://localhost:3000/api
   ```

4. To create production bundles:
   ```bash
   npx nx build api-gateway
   npx nx build products
   ```

## Development Workflow

1. Define service contracts in Protocol Buffers (`.proto` files)
2. Generate TypeScript types using `npm run proto:generate`
3. Implement the service in the microservice project
4. Implement the client in the API Gateway
5. Test the end-to-end flow

### Adding New Services

To add a new microservice to the architecture:

1. Generate a new NestJS application:
   ```bash
   npx nx g @nx/nest:app new-service
   ```

2. Define the service contract in a `.proto` file
3. Generate TypeScript types
4. Implement the service
5. Update the API Gateway to communicate with the new service

## Technologies Used

- **NestJS**: Progressive Node.js framework for building server-side applications
- **gRPC**: High-performance RPC framework
- **Protocol Buffers**: Language-neutral, platform-neutral extensible mechanism for serializing structured data
- **TypeScript**: Typed superset of JavaScript
- **Nx**: Smart, fast and extensible build system with first class monorepo support

## Nx Workspace

This project is built using Nx, a smart, fast and extensible build system with first class monorepo support. Learn more about Nx:

- [Nx Documentation](https://nx.dev)
- [Nx CLI Commands](https://nx.dev/features/run-tasks)
- [Nx Plugins](https://nx.dev/concepts/nx-plugins)

## Additional Resources

- [gRPC Official Documentation](https://grpc.io/docs/)
- [Protocol Buffers Language Guide](https://protobuf.dev/programming-guides/proto3/)
- [NestJS gRPC Microservices](https://docs.nestjs.com/microservices/grpc)
- [Nx Documentation](https://nx.dev/)
