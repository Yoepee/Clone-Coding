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
      <img
        width={70}
        src="https://t1.daumcdn.net/cfile/tistory/202FA7334ED73EDD10"
      ></img>
      <div style={{ marginLeft: "10px" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: "20px" }}>에어팟 프로</div>
          <div style={{ fontSize: "11px", display: "flex" }}>
            <div>일산동</div>
            <div>3분전</div>
          </div>
          <div>80,000원</div>
        </div>
      </div>
      <div style={{ marginLeft: "auto", marginRight:"20px", marginTop:"auto",marginBottom:"5px" }}>🤍1</div>
    </TradeContainer>
    <Plus>
      <IconBtn onClick={()=>{navigate("tradeadd")}}><AddIcon/></IconBtn>
    </Plus>
    </div>
  );
};

export default Trade;

const TradeContainer = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #dee2e6;
  margin: 20px;
  max-width: 100%;
  height: 100px;
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