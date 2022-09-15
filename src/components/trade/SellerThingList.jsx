import React from "react";
import SellerCard from "./SellerCard";
import { __getSellerThing } from "../../redux/modules/sellerThing";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

const SellerThingList = ({ id }) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.sellerThing.data);
  useEffect(() => {
    if (id !== undefined) {
      dispatch(__getSellerThing(id));
    }
  }, [id]);

  // console.log(data);
  const dataiList = data?.data?.slice(0,4)

  return (
    <div style={{ display: "flex" }}>
      {dataiList?.map((data) => {
        return <SellerCard data={data} key={data?.id} />;
      })}
    </div>
  );
};

export default SellerThingList;
