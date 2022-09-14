import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useDispatch } from "react-redux";

const CompleteCard = ({ list }) => {

  return (
    <div>
      <Container>
        <ImgBox src={list.imgUrl} />
        <ContentBox>
          <div>{list.title}</div>
          {/* <div>명륜2동 시간</div> */}
          {list.status}
          <div>{list.price}원</div>
        </ContentBox>
      </Container>
      <ChangeBox>
        거래후기 보내기
      </ChangeBox>
    </div>
  );
};

export default CompleteCard;

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
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #dee2e6;
  height: 35px;
`;
