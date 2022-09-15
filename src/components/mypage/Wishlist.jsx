import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { __getWish} from "../../redux/modules/wish"
import styled from "styled-components";

const Wishlist = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const wishlist = useSelector((state)=>state?.wish?.data)

    useEffect(()=>{
        dispatch(__getWish());
    },[])

    if(wishlist?.data?.length===0){
        return (
            <div style={{textAlign:"center",marginTop:"50%"}}>
            <div>아직 관심 목록이 없어요.</div>
            </div>
        )
    }

    return (
        <>

        {wishlist?.data?.map((wish,i)=>{
            return(
            <div style={{ display: "flex", borderBottom:"2px solid #e0e0e0", cursor:"pointer" }} key={i}
            onClick={()=>{navigate(`/tradedetail/${wish.id}`)}}>
            <img width={80} height={80} src={wish.imgUrl} style={{margin:"10px", borderRadius:"5px"}} />
            <div style ={{marginTop:"15px", width:"100%"}}>
                <div>{wish.title}</div>
                <div style={{ color: "gray", fontSize: "13px" }}>{wish.address}</div>
                <div style={{ display: "flex" }}>
                    {wish.status==="판매중"?
                  null
                  :<>
                  <StatusP style={{ color:"white", borderRadius:"5px", padding:"2px"}}
                    bg={wish.status ==="예약중"?"#00B493":"gray"}>{wish.status}</StatusP> 
                  </>
                  }
                    <p> 　{wish.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</p>
                    
                </div>
            <LikeBox>
                {wish.numOfChatroom !== 0 ?
                  <p>💬{wish?.numOfChatroom}</p> : null}
                {wish.numOfWish !== 0 ?
                  <p>🤍{wish?.numOfWish}</p> : null}
                {wish.numOfChatroom === 0 && wish.numOfWish === 0?
                  <p>　</p>:null}
              </LikeBox>
            </div>
        </div>
        )})}
        </>
    )
}

export default Wishlist;

const StatusP = styled.p`
background-color:${props=>props.bg}; 
width:fit-content;
padding: 2px;
border-radius:5px;
color:white;
`
const LikeBox = styled.div`
display: flex;
justify-content:flex-end;
margin-right:15px;
`;