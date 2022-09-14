import React from 'react';
import RelationCard from './RelationCard';
import { __getRelationThing } from '../../redux/modules/relationThing';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState} from "react";
import { useParams } from 'react-router-dom';

const RelationThingList = () => {
 const {id} = useParams()
//  console.log(id)
  const dispatch = useDispatch();
  const data = useSelector((state) => state.relationThing);
  // console.log(data.data)
  useEffect(() => {
    console.log(id)
    if (id !== undefined) {
      dispatch(__getRelationThing(id));
    }
  }, [id]);

  const dataiList = data?.data?.data?.slice(0,10)
  console.log(dataiList)

  return (
    <div style={{ display: "flex" }}>
      {dataiList?.map((data)=>{ return <RelationCard data = {data} key={data.id} />})}
      
      {/* {dataList.map((data)=>{ return <RelationCard data = {data} key={data.id} />})} */}
      
    </div>
  )
}

export default RelationThingList