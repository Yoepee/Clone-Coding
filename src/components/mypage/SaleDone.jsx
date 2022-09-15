import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { __putChangeDone } from "../../redux/modules/salesList";
import { __putChangeIng } from "../../redux/modules/salesList";

const SaleDone = ({ data, postId }) => {
  const buyer = { data };
  // console.log(buyer)
  // console.log(postId)

  const id = buyer.data.roomId
  // console.log(id)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  //구매자 선택 후 판매완료
  const onChangeDone = () => {
    if (window.confirm("판매확정합니까?")) {
        dispatch(
          __putChangeDone(id)
            );
        alert("구매확정되었습니다.");
        navigate("/saleslist")
    } else {
        alert("취소합니다.");
    }
};


  return (
    <>
    <div onClick={onChangeDone}>
      <div style={{ display: "flex",alignItems:"center",borderBottom:"1px solid grey",height:"70px" }}>
        <AccountCircleIcon
          style={{ width: "60px", height: "50px", marginRight: "10px" }}
        />
        <div>
          <div style={{display:"flex"}}>
            <div style={{paddingRight:"10px",marginBottom:"5px"}}>{buyer.data.buyerNickname}</div>
            <div>주소</div>
          </div>

          <div>시간</div>
        </div>
      </div>
    </div>
    {/* <button onClick={ChangeDoneStatus}>구매자 없이 거래완료</button> */}
    </>
   
  );
};

export default SaleDone;
