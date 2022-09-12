import './App.css';
import Router from './shared/Router';
import {useEffect} from "react"
import {socket, SocketContext} from "./service/socket";

function App() {
  // useEffect(()=>{
  //   return ()=>{
  //     socket.disconnect();
  //   } 
  // },[])
  return (
    // <SocketContext.Provider value={socket}>
      <Router/>
    // </SocketContext.Provider>
  );
}

export default App;
