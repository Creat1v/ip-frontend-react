# IP Display Application @ React

This is a simple React application that displays the client's IP address. It also includes an Express.js server that responds with the client's IP address when it receives a `GET` request at the `/api/ip` endpoint.

## URLs

- React application: `http://localhost:3000`
- IP address endpoint: `http://localhost:3000/api/ip`

## Building the App

1. Install the dependencies:

```bash
npm install
```

2. Build the React application:

```bash
npm run build
```

## Running the Server
Start the server with:

```bash
npm run server
```

The React application will be available at http://localhost:3000 and the IP address endpoint (for usage with curl) will be available at http://localhost:3000/api/ip

## Docker
You can also run the application in a Docker container.

Build the Docker image:
```bash
docker build -t ip-frontend .
```

Run the Docker container:
```bash
docker run -p 3000:3000 ip-frontend
```
The application will be available at the same URLs as when running the server without Docker.

