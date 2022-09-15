import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { __putChangeIng } from "../../redux/modules/salesList";
import { useSelector } from "react-redux";

import { useState } from "react";

const Sales = ({ list }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [change, setChange] = useState(true);
  // console.log(list);

  //클릭하면 status를 변경시켜주는 함수를 만들기
  const post = { list };
  // console.log(post);
  const id = post?.list?.id;
  // console.log(id)

  const changeState = () => {
    setChange(!change);
  };

  //예약중으로 변경

  const data = useSelector((state) => state.salesList);
  // console.log(data)

  const ChangeReserveStatus = () => {
    dispatch(__putChangeIng({ id: id, status: "예약중" }));
  };
  //판매중으로 변경
  const ChangeIngStatus = () => {
    dispatch(__putChangeIng({ id: id, status: "판매중" }));
  };

  const toSaleDonePage = () => {
    navigate("/saledone", {
      state: {
        id: id,
        post: post,
      },
    });
  };


  return (
    <div>
      <Container
      onClick={() => {
        navigate(`/tradedetail/${list.id}`);
      }}>
        <ImgBox
          src={list.imgUrl}
        />
        <ContentBox
        >
          {list.title}
          <div style={{ color: "gray", fontSize: "13px" }}>
            {post.list.address} {post.list.time}
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <StatusP v bg={list.status === "예약중" ? "#00B493" : "gray"}>
              {list.status}
            </StatusP>
            <div>{list.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</div>
          </div>
          <LikeBox>
            {post.list.numOfChatroom !== 0 ? (<p>💬{post.list?.numOfChatroom}</p> ) : null}
            {post.list.numOfWish !== 0 ? <p>🤍{post.list?.numOfWish}</p> : null}
            {post.list.numOfChatroom === 0 && post.list.numOfWish === 0 ? (<p>　</p>) : null}
          </LikeBox>
        </ContentBox>
      </Container>
      <ChangeBox>
        <IngBox>
          {list.status == "판매중" ? (
            <div
              onClick={() => {
                ChangeReserveStatus();
                changeState();
              }}>
              예약중으로 변경
            </div>
          ) : (
            <div
              onClick={() => {
                ChangeIngStatus();
                changeState();
              }}
            >
              판매중으로 변경
            </div>
          )}
        </IngBox>
        <DoneBox>
          <div onClick={()=>{toSaleDonePage()}}>거래완료로 변경</div>
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
  align-items: center;
  justify-content: center;
`;

const IngBox = styled.div`
  display: gird;
  grid-area: ing;
  border-right: 1px solid #dee2e6;
  text-align: center;
`;
const DoneBox = styled.div`
  grid-area: done;
  align-items: center;
  text-align: center;
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
