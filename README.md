# simple-messenger
A basic messenger app interview takehome project

## Structure
There are two components to this app.  A react-redux web app, and a node based serevr.  Socket.IO is used for client-server communication.

### Client App
The client app (in `client-app/`) was bootstrapped with `npx create-react-app client-app --template redux-typescript`.  More information about this template and setup can be found in [client-app/README.md](client-app/README).

### Server
The server is a node app using express.js app which will serve the client app as well as host as [socket.io](https://socket.io/) server. 

## Running the app
### For Development
To start the server:
- open a terminal
- cd to the `server` directory
- `npm install`
- `npm start` 
You will need to kill and restart he serevr (`npm start`) each time you make changes.

To start the client app:
- open a terminal
- cd to the `client-app` directory
- `npm install`
- `npm start`
- your browser should open to [http://localhost:3000](http://localhost:3000)
Changes to the client app will hot-reload

### For "Production"
To have tho web app served from the same host and port as the server:
- open a terminal
- cd to the `client-app` directory
- `npm run build`
- cd to the `server` directory
- `npm run start`
- brows to [http://localhost:3001](http://localhost:3001)

## Caveats and next steps
