# CORS Demo

This project demonstrates Cross-Origin Resource Sharing (CORS) using a simple client-server architecture. The client runs on one port and the server runs on another, showcasing how CORS policies are enforced by web browsers.

## Project Structure

cors-demo/
├── client/
│   ├── index.html
│   └── script.js
└── server/
    └── server.js

- **client/**: Contains the HTML and JavaScript files for the client application.
- **server/**: Contains the Node.js server that serves the API.

## Getting Started

### Prerequisites

- Node.js installed on your machine.

### Installation

1. Clone the repository or download the project files.
2. Navigate to the `server` directory and install the required dependencies:

   `cd cors-demo/server`
   `npm init -y`

3. Create the server:

   `npm install express`

### Running the Server

1. Start the server by running:

   `node server.js`

   The server will run on `http://localhost:3001`.

### Running the Client

1. Open the `client/index.html` file in your web browser directly or use a local server (like `http-server` or `live-server`).
2. If using `http-server`, navigate to the `client` directory and run:

   `http-server -p 3000`

   The client will run on `http://localhost:3000`.

### Testing CORS

1. Click the "Fetch Data" button in the client application.
2. Observe the behavior when trying to access the server's API from a different origin.

### Resolving CORS Issues

To resolve CORS issues without using the CORS middleware, the server is configured to manually set the appropriate CORS headers in the response.

## License

This project is licensed under the MIT License.
