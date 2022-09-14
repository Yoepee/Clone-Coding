import ChattingHeader from "../components/header/ChattingHeader";
import ChatFooter from "../components/footer/ChatFooter"
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import './Chatting.css'


// 실시간 채팅 페이지
const ChatDetail = () => {
    const {id} = useParams();
    const initialState={

        roomId: Number(id),
        sender: localStorage.getItem("name"),
        message:""
    }
    // chatting 토클 상태
    const [live, setLive] = useState(false);
    // 메세지 유저 및 내용
    const [message, setMessage] = useState('');
    //서버 url
    const [serverUrl, setServerUrl] = useState('');
    // 서버로 부터 받아온 내용
    const [chat, setChat] = useState([]);

    const [sockjs, setSockjs] = useState();
    const [receivedData, setReceivedData] = useState('');

    const [mal, setMal] = useState(initialState);

    useEffect(() => { console.log(chat) }, [chat])

    useEffect(() => {
        if (receivedData === '') return;
        setChat([...chat, { name: "Server", message: receivedData }])
    }, [receivedData])

    const onClickConnectBtn = () => {
        const sock = new WebSocket('ws://3.34.5.30:8080/ws/chat');
        sock.onmessage = function (e) {
            setReceivedData(e.data)
            console.log(e.data)
        }
        setSockjs(sock);
        setChat([...chat, { name: "testUser", message: "님이 입장하셨습니다." }])
        setLive(true);
    }
    const onClickDisconnectBtn = () => {
        setLive(false);
    }
    const inputMessage = (e) => {
        setMessage(e.target.value);
        setMal({...mal, message:e.target.value});
    }
    const onEnter = (e) => {
        if (e.keyCode === 13) {
            sendMessage();
        }
    }
    const sendMessage = () => {
        if (message === '') return;
        setChat([...chat, { name: "testUser", message: message }])
        console.log(message)
        console.log(sockjs)
        console.log(JSON.stringify(mal))
        sockjs.send(JSON.stringify(mal));
        // sockjs.send(message);
        setMessage('');
    }
    const setChatServerURL = (e) => {
        setServerUrl(e.target.value);
    }
    const renderChat = () => {
        // console.log(chat)
        return chat.map(({ name, message }, index) => (
            <div key={index}>
                <>{name}: <>{message}</></>
            </div>
        ));
    }
    return (
        <>
            <ChattingHeader onClickDisconnectBtn={onClickDisconnectBtn} />
            <div className="chatting_container">
                {!live &&
                    <div>
                        <>Chrome Extension Chatting Application</>
                        <button className="chatting_connectBtn" onClick={onClickConnectBtn}>연결</button>
                    </div>
                }
                {
                    live &&
                    <div>
                        <div className="chatting_Room">
                            <div>{renderChat()}</div>
                        </div>
                        <br />
                    </div>
                }
                <ChatFooter inputMessage={inputMessage} onEnter={onEnter} message={message} sendMessage={sendMessage} />
            </div>
        </>)
};

export default ChatDetail;