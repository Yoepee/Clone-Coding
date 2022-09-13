import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";


const Sales = ({ list }) => {
  const navigate = useNavigate();
  // console.log(list);
  return (
    <div>
      <Container>
        <ImgBox src={list.imgUrl} 
        onClick={() => {
          navigate(`/tradedetail/${list.id}`); 
        }} />
        <ContentBox onClick={() => {
          navigate(`/tradedetail/${list.id}`); 
        }} >
          <div>{list.title}</div>
          {/* <div>명륜2동 시간</div> */}
          <div>{list.price}원</div>
        </ContentBox>
      </Container>
      <ChangeBox>
        <IngBox >
          <div style={{alignItems:"center",justifyContent:"center"}}>예약중으로 변경</div>
        </IngBox>
        <DoneBox>
          <div>거래완료로 변경</div>
        </DoneBox>
      </ChangeBox>
    </div>
  );
};

export default Sales;

const Container = styled.div`
  /* border-top: 6px solid #dee2e6; */
  border-bottom: 1px solid #dee2e6;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas:
    "img content content"
    "img content content";
  min-height: 60px;
  padding: 20px;
  align-items: center;
`;

const ImgBox = styled.img`
  grid-area: img;
  width: 100%;
  height: 100px;
  border-radius: 5px;
`;
const ContentBox = styled.div`
  grid-area: content;
  margin-left: 10px;
`;

const ChangeBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "ing done";
  border-bottom: 1px solid #dee2e6;
  height: 35px;
`;

const IngBox = styled.div`
  grid-area: ing;
  border-right: 1px solid #dee2e6;
  align-items: center;
  justify-content: center;
`;
const DoneBox = styled.div`
  grid-area: done;
  align-items: center;
  justify-content: center;
`;
