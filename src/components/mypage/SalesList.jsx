import React, { useEffect, useState } from "react";
import Sales from "./Sales";
import { useSelector, useDispatch } from "react-redux";
import { __getSalesList } from "../../redux/modules/salesList";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import styled from "styled-components";

const SalesList = () => {
  const salesList = useSelector((state) => state.salesList);

  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(__getSalesList());
  }, [dispatch]);

  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
     <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
          <TopContainer>
            <ArrowBackIcon onClick={()=>{navigate(-1)}} />
            <h4>판매내역</h4>
            </TopContainer>
          <Tabs value={value} onChange={handleChange} centered>
            <Tab label="판매중" value="1" />
            <Tab label="거래완료" value="2" />
            <Tab label="숨김" value="3" />
          </Tabs>
        </Box>
        <TabPanel value="1">
        {salesList?.data?.success?
          salesList?.data?.data?.map((list) => {
        return <Sales list={list} key={list?.id} />;
      })
      :<p>{salesList?.data?.data}</p>}
      </TabPanel>
        <TabPanel value="2">
        {salesList?.data?.success?
          <p>상태가 거래완료인 thing 찾아서 map</p>
        :<p>{salesList?.data?.data}</p>}
      </TabPanel>
        <TabPanel value="3">
        {salesList?.data?.success?
          salesList?.data?.data?.map((list) => {
        return <Sales list={list} key={list?.id} />;
      })
      :<p>{salesList?.data?.data}</p>}
      </TabPanel>
      </TabContext>
    </Box>
      
    </div>
  );
};

export default SalesList;

const TopContainer = styled.div`
  display:flex;
  align-items: center;
  margin-left:20px
`

