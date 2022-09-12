//http://localhost:3000/tradeadd

import React, { useState } from "react";
import styled from "styled-components";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const TradeAddForm = () => {
  const navigate = useNavigate();
  var fileForm = /(.*?)\.(jpg|jpeg|png|gif|bmp|pdf)$/;

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const onChange = async(e) => {
    // input file에서 선택된 file을 img로 지정
    const img = e.target.files[0];
    // 이미지 파일이 아니면 이후 동작을 생략하고 경고문구 출력
    if(!img?.name.match(fileForm)){
        alert("이미지파일(.jpg, .png, .bmp)만 올려주세요.")
        return
    }
    // 폼데이터 형식 선언
    const formData = new FormData();
    // api에서 요구하는 key값과 value값 지정 (key : "image", value: 이미지파일)
    formData.append('image',img);
    // 이미지만 보내면되기때문에 더이상 append하지않고 이미지파일 전송
    let a = await axios.post("http://3.34.5.30/api/post/image", formData,{
      headers: {
        Authorization: localStorage.getItem("Authorization"),
        RefreshToken: localStorage.getItem("RefreshToken"),
        "Content-Type": "multipart/form-data"
      }
    });
    // 사진을 선택하고 사진선택기능 숨기기
    // 폼데이터 들어가는 형식을 보기위한 내용
    // for (var pair of formData.entries()) {
    //     console.log(pair[0] + ', ' + pair[1]);
    // }
}

  return (
    <form>
      <IconContainer>
        <ArrowBackIcon
          onClick={() => {
            navigate("/");
          }}
        />
        <h3 style={{ marginLeft: "10px" }}>중고거래 글쓰기</h3>
        <h3 style={{ marginLeft: "auto", color: "#dee2e6" }}>완료</h3>
      </IconContainer>

      <Image>
        <div>
          <IconButton aria-label="upload picture" component="label">
            <input hidden accept="image/*" type="file" onChange={onChange}/>
            <AddAPhotoIcon />
          </IconButton>
        </div>
      </Image>

      <Title>
        <TextField
          multiline
          placeholder="제목"
          variant="standard"
          InputProps={{
            disableUnderline: true,
          }}
        />
      </Title>

      <Category>
        <ListItemButton onClick={handleClick}>
          <ListItemText primary="카테고리" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="디지털 기기" />
            </ListItemButton>

            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="생활가전" />
            </ListItemButton>

            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="가구/인테리어" />
            </ListItemButton>

            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="생활/주방" />
            </ListItemButton>

            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="의류" />
            </ListItemButton>

            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="잡화" />
            </ListItemButton>
          </List>
        </Collapse>
      </Category>

      <Price>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <TextField
            multiline
            placeholder="가격(선택사항)"
            variant="standard"
            InputProps={{
              disableUnderline: true,
            }}
          />
          <FormControlLabel
            style={{ float: "right", marginLeft: "auto" }}
            control={<Checkbox name="gilad" />}
            label="가격제안받기"
          />
        </Box>
      </Price>

      <Content>
        <TextField
          placeholder="OO동에 올릴 게시글 내용을 작성해주세요."
          multiline
          variant="standard"
          InputProps={{
            disableUnderline: true,
          }}
          fullWidth
          // style={{display:"block"}}
          id="fullWidth"
        />
      </Content>
    </form>
  );
};

export default TradeAddForm;

const IconContainer = styled.div`
  border-bottom: 1px solid #dee2e6;
  display: flex;
  flex-direction: row;
  min-height: 60px;
  margin: 20px;
  align-items: center;
`;

const Image = styled.div`
  border-bottom: 1px solid #dee2e6;
  display: flex;
  flex-direction: column;
  min-height: 60px;
  margin: 20px;
`;

const Title = styled.div`
  border-bottom: 1px solid #dee2e6;
  display: flex;
  flex-direction: column;
  min-height: 60px;
  margin: 20px;
`;
const Category = styled.div`
  border-bottom: 1px solid #dee2e6;
  display: flex;
  flex-direction: column;
  min-height: 60px;
  margin: 20px;
`;
const Price = styled.div`
  border-bottom: 1px solid #dee2e6;
  display: flex;
  flex-direction: column;
  min-height: 60px;
  margin: 20px;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 60px;
  margin: 20px;
`;
