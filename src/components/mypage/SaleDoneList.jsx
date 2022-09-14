import React from "react";
import SaleDone from "./SaleDone";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { __getBuyers } from "../../redux/modules/saleDone";
import { useSelector } from "react-redux";

const SaleDoneList = () => {
  //게시글 id를 props로 전달받음
  const location = useLocation();
  const { id, post } = location.state;
  console.log(id);
  console.log(post);

  //buyers정보 조회
  const buyers = useSelector((state) => state.getBuyers.data.data);
  console.log(buyers);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getBuyers(id));
  }, [dispatch]);

  return (
    <div>
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

      <SaleDone />
    </div>
  );
};

export default SaleDoneList;
