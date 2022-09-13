import React from 'react'
import SellerCard from './SellerCard';
import { __getSellerThing } from "../../redux/modules/sellerThing";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

const SellerThingList = ({id}) => {
  const dispatch = useDispatch()
const data = useSelector((state)=>state.sellerThing)
  useEffect(()=>{
    if(id!==undefined){
      dispatch(__getSellerThing(id))
    }
  },[id])

  console.log(data);
  return (
    <div>
      {/* <SellerCard data = {data} key ={data.id} /> */}
    </div>
  )
}

export default SellerThingList