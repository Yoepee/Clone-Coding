import React from "react";
import { useState } from "react";
import axios from "axios";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import styled from "styled-components";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import IconButton from "@mui/material/IconButton";
import { useDispatch } from "react-redux";
import { __addtPost } from "../../redux/modules/post";

const PostAddForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  // const initialState = useState({
  //   imageUrl: "",
  //   content: "",
  // });

  let a;
  const [imageUrl, setImageUrl] = useState();
  const [content, setContent] = useState();


  const onChange = async (e) => {
    // input file에서 선택된 file을 img로 지정
    const img = e.target.files;
    // 폼데이터 형식 선언
    const formData = new FormData();
    // api에서 요구하는 key값과 value값 지정 (key : "image", value: 이미지파일)
    // formData.append("image", img);

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
    setImageUrl(a.data?.data);
    // 사진을 선택하고 사진선택기능 숨기기
    // 폼데이터 들어가는 형식을 보기위한 내용
  };


  const onSubmit = () => {
    dispatch(__addtPost({imageUrl,content}));
    navigate("/post")
  }

  return (
    <form encType="multipart/form-data">
      <Content
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          borderBottom: "1px solid #dee2e6",
        }}
      >
        <ArrowBackIcon
          onClick={() => {
            navigate(-1);
          }}
        />
        <h4>동네생활 글쓰기</h4>
        <div style={{fontSize:"18px", color:"gray"}} 
        onClick={onSubmit}
        >완료</div>
      </Content>
      <Content
        style={{
          borderBottom: "1px solid #dee2e6",
          height: "40px"
        }}
      > 동네질문
      </Content>
      <Content>
        <TextField
          name="content"
          type="text"
          ip="content"
          onChange={(e)=>{setContent(e.target.value)}}
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
        <Imgbox >
        <div>
          <IconButton aria-label="upload picture" component="label">
            <input hidden 
            multiple 
            accept="image/*" type="file" onChange={onChange}/>
            <AddAPhotoIcon />
          <img width={50} src={imageUrl}></img>
          </IconButton>
          
        </div>
        </Imgbox>
      
    </form>
  );
};

export default PostAddForm;
const Content = styled.div`
  display: flex;
  min-height: auto;
  margin: 20px;
`;
const Imgbox = styled.div`
  display: flex;
  min-height: auto;
  margin-top: 110%;
  border-top: 1px solid black;
`;
