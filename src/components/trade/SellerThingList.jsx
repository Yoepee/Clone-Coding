import React from 'react'
import SellerCard from './SellerCard';
import { __getSellerThing } from "../../redux/modules/sellerThing";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useState } from 'react';

const SellerThingList = ({id}) => {
const user = {id}
console.log(id)
const sellerId = user.id
console.log(sellerId)

const data = useState((state)=>state)
// console.log(data)

  const dispatch = useDispatch()

  useEffect(()=>{
    console.log(sellerId)
    setTimeout(()=>{dispatch(__getSellerThing(sellerId))},1000) 
  },[id])
  
  return (
    <div>
      {/* <SellerCard data = {data} key ={data.id} /> */}
    </div>
  )
}

export default SellerThingList