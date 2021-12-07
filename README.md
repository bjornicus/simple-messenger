# simple-messenger
A basic messenger app interview takehome project

## Structure
There are two components to this app.  A react-redux web app, and a node based serevr.  Socket.IO is used for client-server communication.

### Client App
The client app (in `client-app/`) was bootstrapped with `npx create-react-app client-app --template redux-typescript`.  More information about this template and setup can be found in [client-app/README.md](client-app/README).

### Server
The server is a node app using express.js app which will serve the client app as well as host as [socket.io](https://socket.io/) server. 
