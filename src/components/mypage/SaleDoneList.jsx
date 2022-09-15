import React from "react";
import SaleDone from "./SaleDone";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { __getBuyers } from "../../redux/modules/saleDone";
import { useSelector } from "react-redux";
import { __putChangeIng } from "../../redux/modules/salesList";

import { AppBar, Toolbar, IconButton, Typography, Box } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import styled from "styled-components";

import BackHeader from "../header/BackHeader";


const SaleDoneList = () => {
  //게시글 id와 정보를 props로 전달받음
  const location = useLocation();
  const { id, post } = location.state;
  const navigate = useNavigate();

  //buyers정보 조회
  const buyers = useSelector((state) => state.getBuyers.data.data);
  console.log(buyers);

  console.log(post);
  console.log(id);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getBuyers(id));
  }, [dispatch]);

  //구매자 선택없이 판매완료
  const ChangeDoneStatus = (postId) => {
    if (window.confirm("판매확정합니까?")) {
      dispatch(__putChangeIng({ id: postId, status: "판매완료" }));
      alert("구매확정되었습니다.");
      navigate("/saleslist");
    } else {
      alert("취소합니다.");
    }
  };

  return (
    <div>

      <Box sx={{ flexGrow: 1 }}>
        <ThemeProvider theme={whiteTheme}>
          <AppBar
            position="static"
            color="primary"
            style={{
              outline: "none",
              boxShadow: "none",
              borderBottom: "1.5px solid grey",
            }}
          >
            <Toolbar>
              <IconButton
                size="large"
                aria-label="search"
                color="inherit"
                onClick={() => {
                  navigate(-1);
                }}
              >
                <ArrowBackIosNewIcon />
              </IconButton>
              <Typography
                variant="h5"
                noWrap
                component="div"
                sx={{ flexGrow: 1, alignSelf: "center" }}
              >
                {" "}
                구매자선택
              </Typography>
            </Toolbar>
          </AppBar>
        </ThemeProvider>
      </Box>
      <div>
        <div style={{ display: "flex", backgroundColor: "#dee2e6" }}>
          <img
            width={60}
            height={60}
            src={post.list.imgUrl}
            style={{ borderRadius: "5px", margin: "10px" }}
          />

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              margin: "10px",
              justifyContent: "center",
              paddingRight: "10px",
            }}
          >
            <div style={{ display: "flex", marginBottom:"5px" }}>
            <StatusP bg={post.list.status === "예약중" ? "#00B493" : "gray"}>
              {post.list.status}
            </StatusP>
              {post.list.title}
            </div>
            {post.list.price}원

          </div>
        </div>
        {buyers?.map((data) => {
          return <SaleDone postId={id} data={data} key={data.roomId} />;
        })}
        {buyers?.length === 0 ? (
          <button onClick={ChangeDoneStatus}>구매자 없이 거래완료</button>
        ) : null}
      </div>

    </div>
  );
};

export default SaleDoneList;
const whiteTheme = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
  },
});
const StatusP = styled.div`
  background-color: ${(props) => props.bg};
  padding: 2px;
  border-radius: 5px;
  color: white;
  margin-right: 5px;
`;