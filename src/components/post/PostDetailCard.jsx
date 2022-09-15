import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom";
import { __getDetailPost } from "../../redux/modules/detailPost";
import styled from "styled-components";

//포스트 상세페이지
const PostDetailCard = () =>{
    const dispatch = useDispatch();
    const {id} = useParams();
    const post = useSelector((state)=>state.detailPost)
    
    useEffect(()=>{
        dispatch(__getDetailPost(id));
    },[dispatch])

    return (
        <div>
            <p style={{backgroundColor:"#e0e0e0", width:"fit-content", padding:"2px", borderRadius:"3px", margin:"10px"}}>동네질문</p>
            <div style={{borderBottom:"1px solid #e2e2e2", display:"flex"}}>
                <div style={{margin:"15px"}}>
                <ChatImg
                    width={70}
                    src="https://t1.daumcdn.net/cfile/tistory/202FA7334ED73EDD10"
                ></ChatImg>
                </div>
                <div>
                <p>{post?.data?.data?.nickname}</p>
                <p style={{color:"#9e9e9e"}}>{post?.data?.data?.address} {post?.data?.data?.time}</p>
                </div>
            </div>
            <div style={{borderBottom:"1px solid #e2e2e2"}}>
                <p style={{margin:"15px"}}>{post?.data?.data?.content}</p>
                <div style={{width:"100%", height:"100%"}}>
                    <img src={post?.data?.data?.imgUrl}/>
                </div>
                <div style={{display:"flex", margin:"15px"}}>
                    <p style={{color:"#9e9e9e"}}>조회 {post?.data?.data?.numOfWatch}</p>
                </div>
                <div>
                    <p style={{display:"flex", margin:"15px", color:"#9e9e9e", textDecoration: "underline"}}>🚨부적절한 게시글이라면 당근마켓에 알려주세요</p>
                </div>
            </div>
            <div style={{borderBottom:"1px solid #e2e2e2", padding: "5px"}}>
                <p style={{color:"#424242", margin:"5px", padding:"5px"}}>💬댓글 {post?.data?.data?.numOfComment}</p>
            </div>
        </div>
    )
}

export default PostDetailCard;

const ChatImg = styled.img`
width: 50px;
height: 50px;
border-radius:50%
`