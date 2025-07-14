# CORS Demo

This project demonstrates Cross-Origin Resource Sharing (CORS) using a simple client-server architecture. The client runs on one port and the server runs on another, showcasing how CORS policies are enforced by web browsers.

## Project Structure

```
cors-demo/
├── client/
│   ├── index.html
│   └── script.js
└── server/
    └── server.js
```

- **client/**: Contains the HTML and JavaScript files for the client application.
- **server/**: Contains the Node.js server that serves the API.

## Getting Started

### Prerequisites

- Node.js installed on your machine.

### Installation

1. Clone the repository or download the project files.
2. Navigate to the `server` directory and install dependencies:

   `cd server && npm install`

### Running the Server

Run the server locally:

   `node server.js`

The server will run on `http://localhost:3001`.

### Running the Client

Use the hosted client at [https://razeem.github.io/cors-demo/](https://razeem.github.io/cors-demo/).

Or, run locally by opening `client/index.html` in your browser or using a local server (e.g., `http-server`):

   `http-server -p 3000` (from the `client` directory)

### Testing CORS

Click "Fetch Data" in the client to test CORS behavior when accessing the server API from a different origin.

### Resolving CORS Issues

CORS headers are set manually in the server response (no CORS middleware used).

## License

MIT License
