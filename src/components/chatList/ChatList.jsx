import styled from "styled-components";
import {useNavigate} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { __getChat } from "../../redux/modules/chat";
import { useEffect } from "react";

const ChatList = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const chat = useSelector((state)=>state.chat);

    useEffect(()=>{
        dispatch(__getChat());
    },[dispatch])

    console.log(chat?.data?.data);
    return (
        <>
        <Chatdiv>
            <div style={{height:"60px"}}/>
            {chat?.data?.data?.map((item,i)=>{
                return (<TradeContainer key={i}>
                    <ChatImg
                        width={70}
                        src="https://t1.daumcdn.net/cfile/tistory/202FA7334ED73EDD10"
                    ></ChatImg>
                    <div style={{marginLeft:"40px"}} onClick={()=>{navigate(`/chatdetail/${item.id}`)}}>
                        <h3>{item.nickName}</h3>
                        <p>{item.message}</p>
                        <p >{item.lastTime}</p>
                    </div>
                </TradeContainer>
                )
            })
            }
        </Chatdiv>
        </>
    )
}

export default ChatList;

const Chatdiv = styled.div`
`
const TradeContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  max-width: 100%;
  height: 100px;
  border-bottom: 1.5px solid grey;
  cursor:pointer;
`;

const ChatImg = styled.img`
width: 50px;
height: 50px;
border-radius:50%
`