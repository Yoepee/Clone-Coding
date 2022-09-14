import React from 'react'

const RelationCard = ({data}) => {
  return (
    <div style={{display:"flex", alignItems:"center",  margin:"10px"  }}>
    <div>
      <img
        style={{width:"170px", height:"100px"}}
        src={data?.imgUrl}
      ></img>

      <div style ={{marginLeft:"15px"}}>
        <div>{data?.title}</div>
        <div>가격</div>
      </div>
    </div>

    </div>
  )
}

export default RelationCard;
