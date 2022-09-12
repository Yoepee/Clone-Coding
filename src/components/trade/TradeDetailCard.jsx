//http://localhost:3000/tradedetail/1     게시글 상세페이지

import React from "react";
import styled from "styled-components";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SellerCard from "./SellerCard";
import { useNavigate } from "react-router-dom";
import RelationCard from "./RelationCard";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import HomeIcon from "@mui/icons-material/Home";
import ShareIcon from "@mui/icons-material/Share";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

const TradeDetailCard = () => {
  const navigate = useNavigate();

  return (
    <div>
      <MenuContainer>

        <First >
          <ArrowBackIcon
           sx={{ color: "#ffffff",fontSize: 30 }} 
           style={{margin:"0px 20px 0px 0px"}}
          onClick={() => {
            navigate(-1);
          }}
        />
        <HomeIcon
        sx={{ color: "#ffffff",fontSize: 30 }}
        style={{margin:"0px 30px 0px 0px"}}
          onClick={() => {
            navigate("/");
          }}
        />
        </First>
       
        <Second>
        <ShareIcon sx={{ color: "#ffffff",fontSize: 30 }} 
        style={{margin:"0px 30px 0px 0px"}}
        />
        <MenuRoundedIcon sx={{ color: "#ffffff",fontSize: 30 }} />
        </Second >
      </MenuContainer>

      <img
        style={{width:"100%", height: "auto"}}
        src="https://blog.kakaocdn.net/dn/uneoL/btryc7LVoLk/VuscYaSvbQRfhgP42hsv0k/img.jpg"
      ></img>

      <Container style={{ display: "flex", flexDirection: "row" }}>
        <AccountCircleIcon
          style={{ width: "50px", height: "50px", marginRight: "10px" }}
        />
        <div style={{ flexDitrection: "colummn" }}>
          <div style={{ fontWeight: "bolder", fontSize: "18px" }}>영희</div>
          <div>원주 태장1동</div>
        </div>
      </Container>

      <Container>
        <div style={{ fontWeight: "bolder", fontSize: "25px" }}>상품명</div>
        <div style={{ color: "#868e96", display: "flex" }}>
          <div style={{ textDecoration: "underline" }}>디지털기기</div>
          <div>시간</div>
        </div>
        <br />
        <div>내용</div>
        <br />
        <div>관심 1 조회 6</div>
        <br />
      </Container>
      <Container style={{fontWeight:"600", justifyContent:"center"}}>
        이 게시글 신고하기
        </Container>
      <Container>
        <div style={{ fontWeight: "bolder", fontSize: "19px" }}>
          OO님의 판매상품
        </div>
        <SellerCard />
      </Container>

      <Container>
        <div style={{ fontWeight: "bolder", fontSize: "19px" }}>
          OO님, 이건 어때요?
        </div>
        <RelationCard />
      </Container>
    </div>
  );
};

export default TradeDetailCard;

const Container = styled.div`
  border-bottom: 1px solid #dee2e6;
  display: flex;
  flex-direction: column;
  min-height: 60px;
  margin: 20px;
`;

const MenuContainer = styled.div`
 /* position: absolute; */
  /* display:grid;
  grid-template-rows: 1fr 1fr;
  grid-template-areas: 
  'first second'; */
  
`
const First = styled.div`
  /* grid-area: first;
  float: left; */
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
`

const Second = styled.div`
  /* grid-area: second;
  float: right; */
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
`