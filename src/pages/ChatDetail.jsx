import ChattingHeader from "../components/header/ChattingHeader";
import ChatFooter from "../components/footer/ChatFooter"
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __getChatContent } from "../redux/modules/chatContent";
import styled from "styled-components";
// import './Chatting.css'


// 실시간 채팅 페이지
const ChatDetail = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();
    const content = useSelector((state) => state.chatContent);

    useEffect(() => {
        dispatch(__getChatContent(id))
    }, [dispatch])

    useEffect(() => {
        onClickConnectBtn();
    }, [])
    
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
        const sock = new WebSocket(process.env.REACT_APP_CHAT_HOST);
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
        // console.log(message)
        // console.log(sockjs)
        // console.log(JSON.stringify(mal))
        sockjs.send(JSON.stringify(mal));
        // sockjs.send(message);
        setMessage('');
    }
    const renderChat = () => {
        return chat.map(({ name, message }, index) => {
            return (
                <div key={index}>
                    {name === localStorage.getItem("name") ?
                        <div key={index} >
                            <div style={{ backgroundColor: "white"}}>
                                <p style={{backgroundColor:"white", marginRight:"10px", textAlign:"right"}}>{name}</p>
                            </div>
                            <div style={{backgroundColor:"white", display:"flex", justifyContent:"flex-end"}}>
                                <p style={{backgroundColor:"#FF7E36",width:"fit-content",textAlign:"right" , padding:"10px", borderRadius:"10px", color:"white"}}>{message}</p>
                            </div>
                        </div>
                        : <div key={index} >
                            <div style={{ backgroundColor: "white" }} >
                                <p style={{backgroundColor:"white", marginLeft:"10px"}}>{name}</p>
                            </div>
                            <div style={{backgroundColor:"white"}}>
                                <p style={{backgroundColor:"#e0e0e0",width:"fit-content", padding:"10px", borderRadius:"10px", marginLeft:"10px"}}>{message}</p>
                            </div>
                        </div>
                    }
                </div>
            )
        });

    }
    return (
        <div>
            <ChattingHeader onClickDisconnectBtn={onClickDisconnectBtn} />
            <div>
                <div>
                    {
                        live &&
                        <div style={{flexDirection:"column-reverse", overflowY:"auto", height:"90vh", }}>
                            <div style={{ textAlign: "center" }}>
                                {localStorage.getItem("name")}님이 입장하셨습니다.</div>
                            <div style={{ backgroundColor: "white", height: "100%", width: "100%" }}>
                                <div>
                                    {content?.data?.data?.slice().reverse().map((a, i) => {
                                        return (
                                            <div key={i} >
                                                {a.nickname === localStorage.getItem("name") ?
                                                    <div>
                                                        <div style={{ backgroundColor: "white"}}>
                                                            <p style={{backgroundColor:"white", marginRight:"10px", textAlign:"right"}}>{a.nickname}</p>
                                                        </div>
                                                        <div style={{backgroundColor:"white", display:"flex", justifyContent:"flex-end"}}>
                                                            <p style={{backgroundColor:"#FF7E36",textAlign:"right",width:"fit-content", padding:"10px", borderRadius:"10px", textAlign:"right", color:"white"}}>{a.message}</p>
                                                        </div>
                                                    </div>
                                                    : <div >
                                                        <div style={{ backgroundColor: "white" }}>
                                                            <p style={{backgroundColor:"white", marginLeft:"10px"}}>{a.nickname}</p>
                                                        </div>
                                                        <div style={{backgroundColor:"white"}}>
                                                            <p style={{backgroundColor:"#e0e0e0",width:"fit-content", padding:"10px", borderRadius:"10px", marginLeft:"10px"}}>{a.message}</p>
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
                                <div style={{ height: "50px", backgroundColor: "white", width: "100%" }}></div>
                            </div>
                        </div>
                    }
                </div>
                <ChatFooter inputMessage={inputMessage} onEnter={onEnter} message={message} sendMessage={sendMessage} />
            </div>
        </div>)
};

export default ChatDetail;

const MyChat = styled.p`
text-align:right;
`