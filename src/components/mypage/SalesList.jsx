import React, { useEffect, useState } from "react";
import Sales from "./Sales";
import { useSelector, useDispatch } from "react-redux";
import { __getSalesList } from "../../redux/modules/salesList";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import styled from "styled-components";
import CompleteCard from "./CompleteCard";

const SalesList = () => {
  const salesList = useSelector((state) => state.salesList);


  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(__getSalesList());
  }, [dispatch]);

  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  // let filterdIngList = salesList?.data?.data?.filter(function (x) {
  //   return x.status == "판매중" || x.status ==  "예약중";
  // });

  // let count = filterdIngList?.length
  // console.log(count)

  // console.log(filterdIngList)

  // let filterdDoneList = salesList?.data?.data?.filter(function (x) {
  //   return x.status == "판매완료";
  // });

  // console.log(filterdIngList)

  return (
    <div>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
            <TopContainer>
              <ArrowBackIcon
                onClick={() => {
                  navigate(-1);
                }}
              />
              <h4>판매내역</h4>
            </TopContainer>
            <Tabs value={value} onChange={handleChange} centered>
              <Tab label="판매중" value="1" />
              <Tab label="거래완료" value="2" />
              <Tab label="숨김" value="3" />
            </Tabs>
          </Box>
          <TabPanel value="1">
            {salesList.data.data == "판매한 내역이 없습니다." ? ( // 서버 응답
              <div>판매한 내역이 없습니다.</div>
            ) : salesList?.data?.data?.filter(function (x) {
                return x.status == "판매중" || x.status == "예약중";
              }).length === 0 ? (
              "판매중인 상품이 없습니다"
            ) : (
              salesList?.data?.data
                ?.filter(function (x) {
                  return x.status == "판매중" || x.status == "예약중";
                })
                ?.map((list) => {
                  return <Sales list={list} key={list?.id} />;
                })
            )}
          </TabPanel>

          <TabPanel value="2">
            {salesList.data.data == "판매한 내역이 없습니다." ? (
              <div>거래를 완료한 내역이 없습니다.</div>
            ) : salesList?.data?.data?.filter(function (x) {
                return x.status == "판매완료";
              }).length === 0 ? (
              "판매한 상품이 없습니다"
            ) : (
              salesList?.data?.data
                ?.filter(function (x) {
                  return x.status == "판매완료";
                })
                .map((list) => {
                  return <CompleteCard list={list} key={list?.id} />;
                })
            )}
          </TabPanel>

          <TabPanel value="3">
            {/* {salesList?.data?.success ? (
              salesList?.data?.data?.map((list) => {
                return <Sales list={list} key={list?.id} />;
              })
            ) : (
              <p>{salesList?.data?.data}</p>
            )} */}
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
};

export default SalesList;

const TopContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
`;
