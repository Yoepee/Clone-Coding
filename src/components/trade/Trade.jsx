// 홈 (판매 게시글)   "http://localhost:3000"
import React, {useEffect} from "react";
import styled from "styled-components";
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __getThing } from "../../redux/modules/thing";

const Trade = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const thing = useSelector((state)=>state.thing)

  useEffect(()=>{
    dispatch(__getThing());
  },[dispatch])

  return (
    <>
    <div style={{display:"relative"}}>
      <div style={{height:"60px"}}/>
    {thing?.data?.data?.map((post)=>{
      return (
    <TradeContainer key={post.id} onClick={() => {
      navigate(`/tradedetail/${post.id}`);                  //임시 라우터
    }}>
     
      <ImageBox 
        width={50}
        src={post.imgUrl}
      ></ImageBox>
      {/* <div style={{ marginLeft: "10px" }}> */}
        {/* <div style={{ display: "flex", flexDirection: "column" }}> */}
          <Contet style={{ fontSize: "20px" }}>{post.title}</Contet>
          <InfoBox>
            일산동 3분전
            <div style={{fontWeight:"600"}}>{post.price}</div>
          </InfoBox>
          
        {/* </div> */}
      {/* </div> */}
      <LikeBox>
      {post.numOfChat!==0?
        <p>💬{post.numOfWish}</p>:null}
      {post.numOfWish!==0?
        <p>🤍{post.numOfWish}</p>:null}
      </LikeBox>
    </TradeContainer>
    )})}
    <Plus>
      <IconBtn onClick={()=>{navigate("tradeadd")}}><AddIcon/></IconBtn>
    </Plus>
    </div>
    </>
  );
};

export default Trade;

const TradeContainer = styled.div`
border-bottom: 1px solid #dee2e6;
align-items: center;
min-width: auto;
max-height: auto;
margin: 15px;
display: grid ;
grid-template-areas: 
'image content content'
'image infoBox infoBox'
'image likeBox likeBox';

`
const Contet = styled.div`
  grid-area: content;
`

const ImageBox = styled.img`
  grid-area: image;
  object-fit: fill;
  width: 100%;
  max-height: 100px;
`

const LikeBox = styled.div`
margin-left: auto; 
grid-area: likeBox;
display:flex;
`;

const InfoBox = styled.div`
 grid-area: infoBox;
`;

const Plus = styled.div`
position : fixed;
bottom : 0;
right: 5%;
margin-bottom:80px
`
const IconBtn = styled.div`
display:flex;
justify-content:center;
align-items:center;
border-radius:50%;
background-color: #ff5722;
width: 50px;
height: 50px;
color:white;
cursor:pointer;
`