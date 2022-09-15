
import React from 'react'
import { useNavigate } from 'react-router-dom';


const RelationCard = ({data}) => {
  const navigate = useNavigate();
  return (
    <div style={{display:"flex", alignItems:"center",  margin:"10px"  }}
    onClick={() => {
      navigate(`/tradedetail/${data.id}`);
    }}>
    <div>
      <img
        style={{width:"170px", height:"100px"}}
        src={data?.imgUrl}
      ></img>

      <div style ={{marginLeft:"15px"}}>
        <div>{data?.title}</div>
        <div>{data?.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</div>
      </div>
    </div>

    </div>
  )
}

export default RelationCard;
