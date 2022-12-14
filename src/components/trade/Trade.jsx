// 홈 (판매 게시글)   "http://localhost:3000"
import React, { useEffect } from "react";
import styled from "styled-components";
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __getThing } from "../../redux/modules/thing";

const Trade = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const thing = useSelector((state) => state.thing.data)

  useEffect(() => {
    dispatch(__getThing());
  }, [])
  
  return (
    <>
      <div style={{ display: "relative" }}>
        <div style={{ height: "60px" }} />
        {/* {Array.isArray(thing)&& */}
          {thing?.data?.map((post) => {
          return (
            <TradeContainer key={post.id} onClick={() => {
              navigate(`/tradedetail/${post.id}`);                  //임시 라우터
            }}>
              <div style={{ height: "100px", alignItems:"center" }}>
                <ImageBox
                  src={post.imgUrl}
                ></ImageBox>
              </div>
              <div>
              <div style={{  marginLeft:"15px", marginTop:"10px"}}>
                <Contet style={{ fontSize: "20px" }}>{post.title}</Contet>
                <InfoBox>
                  {post.status==="판매중"?
                  <>
                  <p>{post.address} {post.time}</p>
                  <div style={{ fontWeight: "600" }}>{post.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 원</div>
                  </>
                  :<> 
                  <p>{post.address} {post.time}</p>
                  <div style={{display:"flex" }}>
                  <StatusP bg={post.status==="예약중"?"#00B493":"gray"}>{post.status} </StatusP>
                    <p> {post.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 원</p>
                  </div>
                  </>
                  }
      
                </InfoBox>
              <LikeBox>
                {post.numOfChat !== 0 ?
                  <p>💬{post?.numOfChat}</p> : null}
                {post.numOfWish !== 0 ?
                  <p>🤍{post?.numOfWish}</p> : null}
                {post.numOfChat===0 && post.numOfWish===0?
                  <p>　</p>:null}
              </LikeBox>
              </div>
              </div>
            </TradeContainer>
          )
        })}
        <Plus>
          <IconBtn onClick={() => { navigate("tradeadd") }}><AddIcon /></IconBtn>
        </Plus>
      </div>
    </>
  );
};

export default Trade;

const TradeContainer = styled.div`
align-items: center;
min-width: auto;
max-height: auto;
display: grid;
grid-template-columns: 1fr 2fr;
border-bottom: 1px solid #dee2e6;
cursor:pointer;
`
const Contet = styled.div`
  grid-area: content;
`

const ImageBox = styled.img`
  grid-area: image;
  object-fit: fill;
  width: 100%;
  height: 100%;
  border-radius:5px;
`

const LikeBox = styled.div`
grid-area: likeBox;
width:100%;
display:flex;
float:right;
margin-right:10px;
justify-content:flex-end;
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

const StatusP = styled.p`
background-color:${props=>props.bg}; 
width:fit-content;
padding: 2px;
border-radius:5px;
color:white;
margin-right: 10px;
`