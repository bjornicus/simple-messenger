import { addMessage, Message } from "./messagesSlice";
import { useAppDispatch } from '../../app/hooks';
import { io, Socket } from "socket.io-client";
import { DefaultEventsMap } from "@socket.io/component-emitter";
import { AppDispatch } from "../../app/store";

export interface server {
  sendMessage: (message: Message) => void;
}

var socketIoConnection: Socket<DefaultEventsMap, DefaultEventsMap> | null = null

export function connectSocketIO(userName: string, dispatch: AppDispatch ): server {
  if(socketIoConnection == null){
    const options = { extraHeaders: { "user": userName } };
    socketIoConnection = process.env.NODE_ENV === 'development' ? io("localhost:3001", options): io(options)
    socketIoConnection.on("message", m => dispatch(addMessage(m)))
  }
  return {
    sendMessage: (message) => socketIoConnection?.emit("message", message)
  }
}
