import ChattingHeader from "../components/header/ChattingHeader";
import ChatFooter from "../components/footer/ChatFooter"
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __getChatContent } from "../redux/modules/chatContent";
// import './Chatting.css'


// 실시간 채팅 페이지
const ChatDetail = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const content = useSelector((state)=>state.chatContent);

    useEffect(()=>{
        dispatch(__getChatContent(id))
    },[dispatch])

    useEffect(()=>{
        onClickConnectBtn();
    },[])

    console.log(content)

    const { id } = useParams();
    const initialState = {
        roomId: Number(id),
        sender: localStorage.getItem("name"),
        message: ""
    }
    // chatting 토클 상태
    const [live, setLive] = useState(false);
    // 메세지 유저 및 내용
    const [message, setMessage] = useState('');
    // 서버로 부터 받아온 내용
    const [chat, setChat] = useState([]);

    const [sockjs, setSockjs] = useState();
    const [receivedData, setReceivedData] = useState('');

    const [mal, setMal] = useState(initialState);

    // useEffect(() => { console.log(chat) }, [chat])

    useEffect(() => {
        if (receivedData === '') return;
        setChat([...chat, { name: JSON.parse(receivedData).sender, message: JSON.parse(receivedData).message }]);
    }, [receivedData])

    const onClickConnectBtn = () => {
        const sock = new WebSocket('ws://3.34.5.30:8080/ws/chat');
        sock.onmessage = function (e) {
            setReceivedData(e.data)
        }
        setSockjs(sock);
        // setChat([...chat, { name: localStorage.getItem("name"), message: "님이 입장하셨습니다." }])
        setLive(true);
    }
    const onClickDisconnectBtn = () => {
        setLive(false);
        navigate(-1);
    }
    const inputMessage = (e) => {
        setMessage(e.target.value);
        setMal({ ...mal, message: e.target.value });
    }
    const onEnter = (e) => {
        if (e.keyCode === 13) {
            sendMessage();
        }
    }
    const sendMessage = () => {
        if (message === '') return;
        // setChat([...chat, { name: "testUser", message: message }])
        console.log(message)
        console.log(sockjs)
        console.log(JSON.stringify(mal))
        sockjs.send(JSON.stringify(mal));
        // sockjs.send(message);
        setMessage('');
    }
    const renderChat = () => {
        console.log(chat)
        return chat.map(({ name, message }, index) => {
            return (
                <div key={index}>
                    {name === localStorage.getItem("name") ?
                        <div key={index} style={{ width:"100%" }}>
                            <div style={{ margin: "10px", maxWidth: "50%", marginLeft: "auto" }}>
                            <p style={{ width: "100%", float: "right", textAlign:"right" }}>{name}</p>
                            <p style={{
                                backgroundColor: "#FF7E36",
                                color: "white",
                                maxWidth: "100%",
                                width: "fit-content",
                                borderRadius: "10px",
                                padding: "10px",
                                float: "right"
                            }}
                            >{message}</p>
                            </div>
                        </div>
                        :<div key={index} style={{ width:"100%" }}> 
                        <div key={index} style={{ margin: "10px", maxWidth: "50%" }}>
                            <p style={{ margin: "10px" }}>{name}</p>
                            <p style={{
                                backgroundColor: "#e0e0e0",
                                color: "black",
                                maxWidth: "100%",
                                width: "fit-content",
                                borderRadius: "10px",
                                padding: "10px"
                            }}
                            >{message}</p>
                        </div>
                        </div>
                    }
                </div>
            )
        });
        
    }
    return (
        <>
            <ChattingHeader onClickDisconnectBtn={onClickDisconnectBtn} />
            <div className="chatting_container">
                {
                    live &&
                    <>
                    <div style={{textAlign:"center"}}>
                        {localStorage.getItem("name")}님이 입장하셨습니다.</div>
                    <div>
                    <div>
                        {content?.data?.data?.map((a, i)=>{
                            return (
                                <div key={i}>
                                    {a.type === "구매자" ?
                                        // <div style={{ width:"100%" }}>
                                            <div style={{ margin: "10px", maxWidth: "100%", marginLeft: "auto" }}>
                                            <p style={{ width: "100%", float: "right", textAlign:"right" }}>{a.nickname}</p>
                                            <p style={{
                                                backgroundColor: "#FF7E36",
                                                color: "white",
                                                maxWidth: "100%",
                                                width: "fit-content",
                                                borderRadius: "10px",
                                                padding: "10px",
                                                float: "right"
                                            }}
                                            >{a.message}</p>
                                            </div>
                                        // </div>
                                        :<div  style={{ width:"100%" }}> 
                                        <div style={{ margin: "10px", maxWidth: "50%" }}>
                                            <p style={{ margin: "10px" }}>{a.nickname}</p>
                                            <p style={{
                                                backgroundColor: "#e0e0e0",
                                                color: "black",
                                                maxWidth: "100%",
                                                width: "fit-content",
                                                borderRadius: "10px",
                                                padding: "10px"
                                            }}
                                            >{a.message}</p>
                                        </div>
                                        </div>
                                    }
                                </div>
                            )
                        })

                        }
                    </div>
                        <div>
                            <div>{renderChat()}</div>
                        </div>
                        <br />
                        
                    </div>
                    </>
                }
                <ChatFooter inputMessage={inputMessage} onEnter={onEnter} message={message} sendMessage={sendMessage} />
                <div style={{height:"50px"}}></div>
            </div>
        </>)
};

export default ChatDetail;