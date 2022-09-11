import { createContext } from "react";
import socketIo from "socket.io-client"

export const socket = socketIo("http://3.34.5.30:8080", {withCredentials:true});
export const SocketContext = createContext(socket);

socket.on("connect", ()=>{
    console.log("socket server connected");
})

socket.on("disconnect", ()=>{
    console.log("socket server disconnected");
})