import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { __getComment, createComment } from "../../redux/modules/commnet";
import SendIcon from '@mui/icons-material/Send';
import styled from "styled-components";

// 댓글
const Comment = () => {
    const dispatch = useDispatch();
    const {id} = useParams();
    const comment = useSelector((state) => state.comment);

    const [content,setContent] = useState("")
    
    useEffect(()=>{
        dispatch(__getComment(id));
    },[dispatch])

    const addComment = async(desc) => {
        let a = await axios.post(process.env.REACT_APP_DANG_GEUN+`/api/towncomment/${id}`,{content:desc},{
            headers: {
                authorization: localStorage.getItem('Authorization'),
                refreshtoken: localStorage.getItem('RefreshToken'),
          }})
        .then((response)=>{
            dispatch(createComment(response?.data?.data));
        })
        setContent("")
    }
    return  (<>
    <div>
        <div style={{display:"flex"}}>
            <p style={{margin:"10px", marginLeft:"10px"}}>🔴등록순</p>
            <p style={{color:"#bdbdbd", margin:"10px"}}>최신순</p>
        </div>
        {comment?.data?.data?.map((ment)=>{
            return(
                <div style={{display:"flex"}} key={ment.id}>
                    <div style={{margin:"15px"}}>
                    <ChatImg
                    width={70}
                    src="https://t1.daumcdn.net/cfile/tistory/202FA7334ED73EDD10"
                ></ChatImg>
                    </div>
                    <div>
                        <p>{ment.nickname}</p>
                        <p>{ment.address} {ment.time}</p>
                        <p>{ment.content}</p>
                    </div>
                </div>
            )
        })}

    </div>
    <div style={{display:"flex", position:"fixed", bottom:"0", padding:"10px", borderTop:"1px solid #e0e0e0", width:"100%"}}>
        <input placeholder="댓글을 입력하세요" style={{borderRadius:"5px",width:"90%", marginLeft:"20px"}}
        value={content}
        onChange={(e)=>{setContent(e.target.value)}}/>
        <div style={{height:"40px", marginLeft:"20px"}} 
        onClick={(e)=>{addComment(content)}}>
        <SendIcon/>
        </div>
    </div>
    </>)
}

export default Comment;
const ChatImg = styled.img`
width: 50px;
height: 50px;
border-radius:50%;
`