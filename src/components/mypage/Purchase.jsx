import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { __getPurchase } from "../../redux/modules/purchase";


const Purchase = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const purchase = useSelector((state)=>state?.purchase?.data)

    useEffect(()=>{
        dispatch(__getPurchase());
    },[])

    if(purchase.data.length===0){
        return (
            <div style={{textAlign:"center", marginTop:"50%"}}>
            <div>구매 내역이 없어요.</div>
            <div>동네 이웃과 따뜻한 거래를 해보세요.</div>
            </div>
        )
    }

    return (
        <>
        {purchase?.data?.map((buy,i)=>{
            return(
            <div style={{ display: "flex", borderBottom:"2px solid #e0e0e0", cursor:"pointer"}} key={i}
            onClick={()=>{navigate(`/tradedetail/${buy.id}`)}}>
            <img width={50} src={buy.imgUrl} style={{margin:"10px"}} />
            <div>
                <p>{buy.title}</p>
                <div style={{ display: "flex" }}>
                    <p style={{backgroundColor:"#bdbdbd", color:"white", borderRadius:"5px", padding:"2px"}}>거래완료 </p>
                    <p> 　{buy.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</p>
                </div>
            </div>
        </div>
        )})}
        </>
    )
}

export default Purchase;