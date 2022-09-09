import React from 'react'

const RelationCard = () => {
  return (
    <div style={{display:"flex", alignItems:"center", margin:"10px" }}>
    <div>
      <img
        style={{width:"170px", height:"100px"}}
        src="https://t1.daumcdn.net/cfile/tistory/202FA7334ED73EDD10"
      ></img>

      <div style ={{marginLeft:"15px"}}>
        <div>상품</div>
        <div>가격</div>
      </div>
    </div>

    <div>
      <img
        style={{width:"170px", height:"100px"}}
        src="https://t1.daumcdn.net/cfile/tistory/202FA7334ED73EDD10"
      ></img>

      <div style ={{marginLeft:"15px"}}>
        <div>상품</div>
        <div>가격</div>
      </div>
    </div>
    </div>
  )
}

export default RelationCard;
