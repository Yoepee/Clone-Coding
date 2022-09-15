import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { __getWish} from "../../redux/modules/wish"

const Wishlist = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const wishlist = useSelector((state)=>state?.wish?.data)

    useEffect(()=>{
        dispatch(__getWish());
    },[])
    return (
        <>
        {wishlist?.data?.map((wish,i)=>{
            return(
            <div style={{ display: "flex", borderBottom:"2px solid #e0e0e0", cursor:"pointer" }} key={i}
            onClick={()=>{navigate(`/tradedetail/${wish.id}`)}}>
            <img width={50} src={wish.imgUrl} style={{margin:"10px"}} />
            <div>
                <p>{wish.title}</p>
                <div style={{ display: "flex" }}>
                    {wish.status==="판매중"?
                  null
                  :<>
                  <p style={{backgroundColor:"#bdbdbd", color:"white", borderRadius:"5px", padding:"2px"}}
                    bg={wish.status==="예약중"?"#00B493":"gray"}>{wish.status}</p> 
                  </>
                  }
                    <p> 　{wish.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</p>
                </div>
            </div>
        </div>
        )})}
        </>
    )
}

export default Wishlist;