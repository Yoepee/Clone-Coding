// 바닥 메뉴
import { useState, use } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import AddIcon from '@mui/icons-material/Add';
import SendIcon from '@mui/icons-material/Send';
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({  // style 요소 선언
    container: {                          // container이름의 객체에 스타일링 해주기
        backgroundColor: 'white',
        position: "absolute",
        bottom: 0,
        width: "100%",
        justifyContent: "space-between",
        borderTop: "1.5px solid grey"
    },
    color: {
        color: "black",
        "&.Mui-selected": {
            color: "black",
            fontWeight: "bold"
        },
    }

}));
const ChatFooter = ({inputMessage, onEnter, message, sendMessage}) => {
    const classes = useStyles();
    const [chat, setChat] = useState("");
    const navigate = useNavigate();
    return (
        <>
        <ChatFoot style={{position:"fixed", width:"100%", bottom:"0"}}>
            <div style={{width:"5%",cursor:"pointer", margin:"10px"}}>
                <AddIcon/>
            </div>
            <div style={{width:"85%", height:"100%", textAlign:"center", alignItems:"center", display:"flex"}}>
            <input
            type="text"
            value={message}
            placeholder="메세지를 입력하세요"
            style={{width:"100%",height:"100%", borderRadius:"30px", height:"30px"}}
            onChange={inputMessage}
            onKeyDown={onEnter}
            />
            </div>
            <div style={{width:"5%", cursor:"pointer", margin:"10px"}} onClick={sendMessage}>
                <SendIcon/>
            </div>
        </ChatFoot>
        </>
    )
}

export default ChatFooter;

const ChatFoot = styled.div`
border-top: 1.5px solid grey;
display:flex;
position:absolute; 
bottom:0;
width: 100%;
height: 50px;
justify-content:center;
align-items:center;
text-align: center;
background-color:#eeeeee
`