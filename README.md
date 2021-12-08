# simple-messenger
A basic messenger app interview takehome project

## Structure
There are two components to this app.  A react-redux web app, and a node based serevr.  Socket.IO is used for client-server communication.

### Client App
The client app (in `client-app/`) was bootstrapped with `npx create-react-app client-app --template redux-typescript`.  More information about this template and setup can be found in [client-app/README.md](client-app/README).  Files in `client-app/public`, `client-app/src/app` as well as most of the files directly in `client-app` and `client-app/src` are unchanged from the template. Exceptions are `src/App.*`, `src/Messenger.tsx`, and `src/app/store.ts`.  Everything in `client-app/src/features` is my code.  I've duplicated the comments that the template provides in `src/features/messagesSlice.ts` about functionality that redux toolkit provides because I found it quite useful when not already familiar with redux toolkit.

### Server
The server is a node app using express.js app which will serve the client app as well as host a [socket.io](https://socket.io/) server. 

## Running the app
### For Development
Have node installed (the code was developed using node v17.2.0).
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
### Server
The server is very minmal, with no tests. It also sends the messages it gets to *all* of the connected users, so it's currently more of a chatroom app than a private messaging app. Next steps here would be to set up some tests so that I can TDD more rubust/additional functionality such as:
- keeping track of connected users and responding with the list of users so clients can select who they want to message
- supporting a target recipient and delivering the message only to that user (and the sender)
- adding per conversation message storage, which can be retrieved by the client on connection

### client
The client app is a little more mature, and has reasonable structure for components and reducers, but the server connection bit is hacked in without tests and I'm not really happy with the current abstraction.  Also, the UI is quite ugly so if I had time I'd add [tailwindcss](https://tailwindcss.com/) and make it look a lot nicer.

### Hosting
I've deployed an instance on a DigitalOcean droplet at [http://165.232.156.250/](http://165.232.156.250/)