// 홈 (판매 게시글)   "http://localhost:3000"
import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Trade = () => {
  const navigate = useNavigate()
  return (
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
