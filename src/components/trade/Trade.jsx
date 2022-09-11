// 홈 (판매 게시글)   "http://localhost:3000"
import React, {useEffect} from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import { useDispatch, useSelector } from "react-redux";
import { __getThing } from "../../redux/modules/thing";

const Trade = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const thing = useSelector((state)=>state.thing)

  useEffect(()=>{
    dispatch(__getThing());
  },[dispatch])

  console.log(thing?.data);
  return (
    <div style={{display:"relative"}}>
    <TradeContainer onClick={() => {
      navigate(`/tradedetail/1`);                  //임시 라우터
    }}>
     
      <ImageBox 
        // width={50}

        src="https://t1.daumcdn.net/cfile/tistory/202FA7334ED73EDD10"
      ></ImageBox>
      {/* <div style={{ marginLeft: "10px" }}> */}
        {/* <div style={{ display: "flex", flexDirection: "column" }}> */}
          <Contet style={{ fontSize: "20px" }}>에어팟 프로</Contet>
          <InfoBox>
            일산동 3분전
            <div style={{fontWeight:"600"}}>80,000원</div>
          </InfoBox>
          
        {/* </div> */}
      {/* </div> */}
      <LikeBox>🤍1</LikeBox>
    </TradeContainer>
    <Plus>
      <IconBtn onClick={()=>{navigate("tradeadd")}}><AddIcon/></IconBtn>
    </Plus>
    </div>
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
`;

const InfoBox = styled.div`
 grid-area: infoBox;
`;

const Plus = styled.div`
position : absolute;
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