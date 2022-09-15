import React from "react";
import SaleDone from "./SaleDone";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { __getBuyers } from "../../redux/modules/saleDone";
import { useSelector } from "react-redux";
import { __putChangeIng } from "../../redux/modules/salesList";
import BackHeader from "../header/BackHeader";

const SaleDoneList = () => {
  //게시글 id와 정보를 props로 전달받음
  const location = useLocation();
  const { id, post } = location.state;
  const navigate = useNavigate();

  //buyers정보 조회
  const buyers = useSelector((state) => state.getBuyers.data.data);
  console.log(buyers);

  console.log(post)
  console.log(id)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getBuyers(id));
  }, [dispatch]);

  //구매자 선택없이 판매완료
const ChangeDoneStatus = (postId) => {
  if (window.confirm("판매확정합니까?")) {
    dispatch(__putChangeIng({id:postId, status:"판매완료"}));
    alert("구매확정되었습니다.");
    navigate("/saleslist")
} else {
    alert("취소합니다.");
}
}


  return (
    <div>
      <BackHeader/>
      <div style={{ display: "flex" }}>
        <img width={50} src={post.list.imgUrl} />
        <div style={{display:"flex", flexDirection:"column"}}>
          <div style={{ display: "flex" }}>
            {post.list.status}
            {post.list.title}
          </div>
          {post.list.price}원
        </div>
        
      </div>
      {buyers?.map((data)=>{ return <SaleDone postId ={id} data = {data} key={data.roomId} />})}
      {buyers?.length===0?
      <button onClick={ChangeDoneStatus}>구매자 없이 거래완료</button>:null
      }
      
    </div>
  );
};

export default SaleDoneList;
