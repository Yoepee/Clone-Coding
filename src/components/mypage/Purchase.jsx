import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getPurchase } from "../../redux/modules/purchase";


const Purchase = () => {
    const dispatch = useDispatch();
    const purchase = useSelector((state)=>state?.purchase?.data)

    useEffect(()=>{
        dispatch(__getPurchase());
    },[])

    return (
        <>
        {purchase?.data?.map((buy,i)=>{
            return(
            <div style={{ display: "flex", borderBottom:"2px solid #e0e0e0" }} key={i}>
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