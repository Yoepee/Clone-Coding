import styled from "styled-components";
import {useNavigate} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { __getChat } from "../../redux/modules/chat";
import { useEffect } from "react";
import axios from "axios";

const ChatList = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const chat = useSelector((state)=>state.chat);

    useEffect(()=>{
        dispatch(__getChat());
    },[dispatch])

    console.log(chat);
    return (
        <>
        <Chatdiv>
            <div style={{height:"60px"}}/>
            <TradeContainer>
                <ChatImg
                    width={70}
                    src="https://t1.daumcdn.net/cfile/tistory/202FA7334ED73EDD10"
                ></ChatImg>
                <div style={{marginLeft:"40px"}} onClick={()=>{navigate("/chatdetail/:id")}}>
                    <h3>당근이</h3>
                    <p>코찡님, 노암동 근처에서 다양한 물품들이 ...</p>
                </div>
            </TradeContainer>
            
        </Chatdiv>
        </>
    )
}

export default ChatList;

const Chatdiv = styled.div`
border-bottom: 1.5px solid grey;
`
const TradeContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  max-width: 100%;
  height: 100px;
`;

const ChatImg = styled.img`
width: 50px;
height: 50px;
border-radius:50%
`