import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useDispatch } from "react-redux";

const CompleteCard = ({ list }) => {
  const navigate = useNavigate();
  return (
    <div>
      <Container onClick={() => {
        navigate(`/tradedetail/${list.id}`);
      }}>
        <ImgBox src={list.imgUrl} />
        <ContentBox>
          {list.title}
          <div style={{ color: "gray", fontSize: "13px" }}>
            {list.address} {list.time}
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <StatusP v bg={list.status === "예약중" ? "#00B493" : "gray"}>
              {list.status}
            </StatusP>
            <div>{list.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</div>
          </div>
          <LikeBox>
          {list.numOfChatroom !== 0 ? (<p>💬{list?.numOfChatroom}</p> ) : null}
            {list.numOfWish !== 0 ? <p>🤍{list?.numOfWish}</p> : null}
            {list.numOfChatroom === 0 && list.numOfWish === 0 ? (<p>　</p>) : null}
          </LikeBox>
        </ContentBox>
      </Container>
      <ChangeBox>거래후기 보내기</ChangeBox>
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
  border-bottom: 1px solid #dee2e6;
  height: 35px;
  text-align: center;
  align-items: center;
  justify-content: center;
`;
const StatusP = styled.div`
  background-color: ${(props) => props.bg};
  padding: 2px;
  border-radius: 5px;
  color: white;
  margin-right: 5px;
`;
const LikeBox = styled.div`
  grid-area: likeBox;
  width: 100%;
  display: flex;
  float: right;
  margin-right: 10px;
  justify-content: flex-end;
`;
