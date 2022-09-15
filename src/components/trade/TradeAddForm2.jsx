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
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { createThing } from "../../redux/modules/thing";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { __getDetailThing } from "../../redux/modules/detailThing";
import { render } from "@testing-library/react";

const TradeAddForm2 = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  var fileForm = /(.*?)\.(jpg|jpeg|png|gif|bmp|pdf)$/;
  const detail = useSelector((state) => state.detailThing);
  const initialState = {
    title: "",
    price: "",
    category: "카테고리",
    imageUrl: "",
    content: "",
  };

  useEffect(() => {
    if (id !== undefined) dispatch(__getDetailThing());
  }, [dispatch]);
  console.log(detail);
  if (id !== undefined) {
    initialState = {
      title: detail?.data?.data?.title,
      price: detail?.data?.data?.price,
      category: detail?.data?.data?.category,
      imageUrl: detail?.data?.data?.imageUrl,
      content: detail?.data?.data?.content,
    };
  }
  let a;
  const [post, setPost] = useState(initialState);
  const [open, setOpen] = useState(false);
  const [imgArr, setImgArr] = useState([])


  const user = localStorage.getItem("token1")
  const handleClick = () => {
    setOpen(!open);
  };

  const onChangeHandler = (event) => {
    const { value, name } = event.target;
    setPost({ ...post, [name]: value });
  };

  const onChange = async (e) => {
    // input file에서 선택된 file을 img로 지정
    const img = e.target.files;
    console.log(img)
    // 이미지 파일이 아니면 이후 동작을 생략하고 경고문구 출력
    // if (!img?.name.match(fileForm)) {
    //   alert("이미지파일(.jpg, .png, .bmp)만 올려주세요.");
    //   return;
    // }
    // 폼데이터 형식 선언
    const formData = new FormData();
    // api에서 요구하는 key값과 value값 지정 (key : "image", value: 이미지파일)
    // formData.append("image", img);
    // 이미지만 보내면되기때문에 더이상 append하지않고 이미지파일 전송

    for (let i = 0; i < img.length; i++) { 
      formData.append("image", img[i]); // 반복문을 활용하여 파일들을 formData 객체에 추가한다
      a = await axios.post(process.env.REACT_APP_DANG_GEUN+"/api/post/image", formData, {
        headers: {
          Authorization: localStorage.getItem("Authorization"),
          RefreshToken: localStorage.getItem("RefreshToken"),
          "Content-Type": "multipart/form-data",
        },
      });
    } 
    console.log(a);
    console.log(formData);
   
    setPost({ ...post, imageUrl: a.data?.data });
    // 사진을 선택하고 사진선택기능 숨기기
    // 폼데이터 들어가는 형식을 보기위한 내용
    for (var pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }
  };

  const Selecthandler = (category) => {
    setPost({ ...post, category: category });
    setOpen(!open);
  };

  const submit = async () => {
    let b = await axios.post(process.env.REACT_APP_DANG_GEUN+"/api/post", post, {
      headers: {
        Authorization: localStorage.getItem("Authorization"),
        RefreshToken: localStorage.getItem("RefreshToken"),
      },
    });
    dispatch(createThing(b?.data?.data));
    navigate("/");
  };

  return (
    <form encType="multipart/form-data">
      <IconContainer>
        <ArrowBackIcon
          onClick={() => {
            navigate("/");
          }}
        />
        <h3 style={{ marginLeft: "10px" }}>중고거래 글쓰기</h3>
        <h3
          style={{ marginLeft: "auto", color: "#dee2e6", cursor: "pointer" }}
          onClick={() => submit()}
        >
          완료
        </h3>
      </IconContainer>

      <Image>
        <div>
          <IconButton aria-label="upload picture" component="label">
            <input hidden 
            multiple 
            accept="image/*" type="file" onChange={onChange}/>
            <AddAPhotoIcon />
          {/* map돌려주기... */}
          <img width={50} src={post.imageUrl}></img>
          </IconButton>
          
        </div>
      </Image>


      <Title>
        <TextField
          name="title"
          value={post.title}
          type="text"
          ip="title"
          onChange={onChangeHandler}
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
          <ListItemText primary={post.category} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={() => Selecthandler("가전")}
            >
              <ListItemText primary="가전" />
            </ListItemButton>

            <ListItemButton
              sx={{ pl: 4 }}
              onClick={() => Selecthandler("가구")}
            >
              <ListItemText primary="가구" />
            </ListItemButton>

            <ListItemButton
              sx={{ pl: 4 }}
              onClick={() => Selecthandler("생활")}
            >
              <ListItemText primary="생활" />
            </ListItemButton>

            <ListItemButton
              sx={{ pl: 4 }}
              onClick={() => Selecthandler("도서")}
            >
              <ListItemText primary="도서" />
            </ListItemButton>

            <ListItemButton
              sx={{ pl: 4 }}
              onClick={() => Selecthandler("의류")}
            >
              <ListItemText primary="의류" />
            </ListItemButton>

            <ListItemButton
              sx={{ pl: 4 }}
              onClick={() => Selecthandler("스포츠")}
            >
              <ListItemText primary="스포츠" />
            </ListItemButton>

            <ListItemButton
              sx={{ pl: 4 }}
              onClick={() => Selecthandler("티켓")}
            >
              <ListItemText primary="티켓" />
            </ListItemButton>

            <ListItemButton
              sx={{ pl: 4 }}
              onClick={() => Selecthandler("미용")}
            >
              <ListItemText primary="미용" />
            </ListItemButton>

            <ListItemButton
              sx={{ pl: 4 }}
              onClick={() => Selecthandler("디지털")}
            >
              <ListItemText primary="디지털" />
            </ListItemButton>

            <ListItemButton
              sx={{ pl: 4 }}
              onClick={() => Selecthandler("인테리어")}
            >
              <ListItemText primary="인테리어" />
            </ListItemButton>

            <ListItemButton
              sx={{ pl: 4 }}
              onClick={() => Selecthandler("주방")}
            >
              <ListItemText primary="주방" />
            </ListItemButton>

            <ListItemButton
              sx={{ pl: 4 }}
              onClick={() => Selecthandler("기타")}
            >
              <ListItemText primary="기타" />
            </ListItemButton>

            <ListItemButton
              sx={{ pl: 4 }}
              onClick={() => Selecthandler("삽니다")}
            >
              <ListItemText primary="삽니다" />
            </ListItemButton>
          </List>
        </Collapse>
      </Category>

      <Price>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <TextField
            name="price"
            value={post.price}
            type="text"
            ip="price"
            onChange={onChangeHandler}
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
          name="content"
          value={post.content}
          type="text"
          ip="content"
          onChange={onChangeHandler}
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

export default TradeAddForm2;

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
