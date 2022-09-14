import React from "react";
import styled from "styled-components";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import MapsUgcOutlinedIcon from "@mui/icons-material/MapsUgcOutlined";
import { useNavigate } from "react-router-dom";


const PostCard = ({post}) => {

  // console.log(post)
  return (


    
    <Container key = {post.id}>
      <LocationBox>동네질문</LocationBox>
      <ContentBox>
        <div style={{color:"orange"}}>Q.</div>
        <div>{post.content}</div>
      </ContentBox>
      <img style={{margin:"right", maxWidth:"200px"}} src={post.imgUrl}></img>
      <WriterInfoBox>{post.nickname}·{post.address}
        <div style={{marginLeft:"auto"}}>{post.time}</div></WriterInfoBox>
      <hr />
      <div style={{ display: "flex" }}>
        <IconBox>
          <TaskAltIcon color="action" />
          <div>궁금해요</div>
        </IconBox>
        <IconBox>
          <MapsUgcOutlinedIcon color="action" />
          답변
        </IconBox>
        <div style={{marginLeft:"auto"}}>😀1</div>
      </div>
    </Container>


   
  );
};

export default PostCard;
const Container = styled.div`
  border-bottom: 8px solid #dee2e6;
  display: flex;
  flex-direction: column;
  min-height: 60px;
  padding: 20px;
  cursor:pointer;
`;

const LocationBox = styled.div`
  font-size: 13px;
  border: 1px solid none;
  border-radius: 3px;
  background-color: #f1f3f5;
  /* width:80px; */
  width: max-content;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  height: 25px;
  padding: 1px 4px 1px 4px;
`;

const WriterInfoBox = styled.div`
 color: gray;
 margin-top: 20px;
 display: flex;
`;

const IconBox = styled.div`
  display: flex;
  align-items: center;
  padding-right: 20px;
`;

const ContentBox = styled.div`
  display: flex;
  font-weight: 600;
  font-size: 20px;
`
