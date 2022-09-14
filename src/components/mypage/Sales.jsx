import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import {__putChangeIng, __putChangeDone } from "../../redux/modules/salesList";
import { useSelector } from 'react-redux';

import { useState } from "react";
import SaleDoneList from "./SaleDoneList";


const Sales = ({ list }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [change, setChange] = useState(true)
  // console.log(list);
//클릭하면 status를 변경시켜주는 함수를 만들기
const post = {list}
// console.log(post?.list?.status)
const id = post?.list?.id
console.log(id)

const changeState = () => {
  setChange(!change)
}


//예약중으로 변경

const data = useSelector((state)=>state.salesList)
// console.log(data)

const ChangeReserveStatus = () => {
  dispatch(__putChangeIng({id:id, status:"예약중"}))
}
//판매중으로 변경
const ChangeIngStatus = () => {
  dispatch(__putChangeIng({id:id, status:"판매중"}))

}

const toSaleDonePage = () => {
  navigate('/saledone',{
    state: {
      id:id,
      post:post
    },
  });

}






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
          {list.status}
          <div>{list.price}원</div>
        </ContentBox>
      </Container>
      <ChangeBox>
        <IngBox >

          {list.status == "판매중"
          
          ?

          <div 
          onClick={()=>{ChangeReserveStatus();changeState()}} 
          style={{alignItems:"center",justifyContent:"center"}}>예약중으로 변경
          </div>
          
          : 

          <div onClick={()=>{ChangeIngStatus();changeState()}}>판매중으로 변경
          </div>
          }
          
        </IngBox>
        <DoneBox>
          <div 
          onClick={toSaleDonePage}

          >거래완료로 변경</div>
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
