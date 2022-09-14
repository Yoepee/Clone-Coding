//http://localhost:3000/tradedetail/1     게시글 상세페이지
import axios from "axios";
import React, {useEffect, useState} from "react";
import styled from "styled-components";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SellerThingList from "./SellerThingList";
import { useNavigate, useParams } from "react-router-dom";
import RelationCard from "./RelationCard";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import HomeIcon from "@mui/icons-material/Home";
import ShareIcon from "@mui/icons-material/Share";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { useDispatch, useSelector } from "react-redux";
import { __getDetailThing } from "../../redux/modules/detailThing";
import { DetailsSharp } from "@material-ui/icons";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { __getLike, __Like, __UnLike, ThingLike } from "../../redux/modules/like";

const TradeDetailCard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const detail = useSelector((state) =>state.detailThing);
  const like = useSelector((state) => state.like);
  const {id} = useParams();
  console.log(detail)
  const [chk, setChk] = useState(false);
  const [count,setCount] = useState(0);

  useEffect(()=>{
    dispatch(__getDetailThing(id));
    // let a= setTimeout(()=>dispatch(__getLike(id)),1000);
    // return(()=>{
    //   clearTimeout(a);
    // })
  },[dispatch])

  const postUpdate = () =>{ 
    if(localStorage.getItem("name")!==detail?.data?.data?.nickname){
      alert("본인 게시물만 수정할 수 있습니다.");
      return;
    }
    navigate(`/tradeadd/${id}`);
  }
  const postRemove = async() =>{
    if(localStorage.getItem("name")!==detail?.data?.data?.nickname){
      alert("본인 게시물만 삭제할 수 있습니다.");
      return;
    }
    if (window.confirm("게시글을 삭제하시겠습니까?") === true) {
      let a = await axios.delete(`http://3.34.5.30/api/post/${id}`, {
        headers: {
            authorization: localStorage.getItem('Authorization'),
            refreshtoken: localStorage.getItem('RefreshToken'),
      }});
      console.log(a);
      if (a?.data?.success === false) {
        alert(a?.data?.data)
        return
      }
      navigate("/");
    } else { return false; }
  }
  const createChat = async() => {
    let search = await axios.get(`http://3.34.5.30/api/chat/${id}`, {
      headers: {
          authorization: localStorage.getItem('Authorization'),
          refreshtoken: localStorage.getItem('RefreshToken'),
    }});
    if(search?.data?.data === 0){
    let create = await axios.post(`http://3.34.5.30/api/chat/${id}`,{roomName:localStorage.getItem("name")},{
      headers: {
          authorization: localStorage.getItem('Authorization'),
          refreshtoken: localStorage.getItem('RefreshToken'),
    }}).then(()=>{
      navigate(`/chatdetail/${create?.data?.data?.roomId}`);
    })
    }else{
      navigate(`/chatdetail/${search?.data?.data}`);
    }
  }
  const likeThing = async() => {
    let a = await axios.post(`http://3.34.5.30/api/addwishlist/${id}`,null,{
      headers: {
          authorization: localStorage.getItem('Authorization'),
          refreshtoken: localStorage.getItem('RefreshToken'),
    }})
    if(a?.data?.success){
      alert(a?.data?.data);
    }else{
      alert(a?.data?.data);
    }
  }
  const unlikeThing = async() => {
    let a = await axios.post(`http://3.34.5.30/api/removewishlist/${id}`,null,{
      headers: {
          authorization: localStorage.getItem('Authorization'),
          refreshtoken: localStorage.getItem('RefreshToken'),
    }})
    if(a?.data?.success){
      alert(a?.data?.data);
    }else{
      alert(a?.data?.data);
    }
  }
  return (
    <div>
      <MenuContainer>

        <First >
          <ArrowBackIcon
           sx={{ color: "#ffffff",fontSize: 30 }} 
           style={{margin:"0px 20px 0px 0px"}}
          onClick={() => {
            navigate(-1);
          }}
        />
        <HomeIcon
        sx={{ color: "#ffffff",fontSize: 30 }}
        style={{margin:"0px 30px 0px 0px"}}
          onClick={() => {
            navigate("/");
          }}
        />
        </First>
       
        <Second>
        <ShareIcon sx={{ color: "#ffffff",fontSize: 30 }} 
        style={{margin:"0px 30px 0px 0px"}}
        />
        <MenuRoundedIcon sx={{ color: "#ffffff",fontSize: 30 }} 
        style={{cursor:"pointer"}}
        onClick={()=>{setChk(!chk)}}/>
        </Second >
      </MenuContainer>
      {chk?
        <div style={{width:"120px", 
        position: "absolute" , 
        backgroundColor:"white",
        top:"35px", right:"0",
        textAlign:"center",
        borderRadius:"5px"}}>
          <div style={{borderBottom:"1px solid black", padding:"3px", cursor:"pointer"}}
          onClick={()=>{postUpdate()}}
          >게시글 수정</div>
          <div style={{ padding:"3px", cursor:"pointer"}}
          onClick={()=>{postRemove()}}
          >게시글 삭제</div>
        </div>
        :null
      }
      <img
        style={{width:"100%", height: "auto"}}
        src={detail?.data?.data?.imgUrl}
      ></img>
      <Container style={{ display: "flex", flexDirection: "row" }}>
        <AccountCircleIcon
          style={{ width: "50px", height: "50px", marginRight: "10px" }}
        />
        <div style={{ flexDitrection: "colummn" }}>
          <div style={{ fontWeight: "bolder", fontSize: "18px" }}>{detail?.data?.data?.nickname}</div>
          <div>원주 태장1동</div>
        </div>
        <div style={{position:"absolute", right:"10px"}}>매너온도 : {detail?.data?.data?.temperature}</div>
      </Container>

      <Container>
        <div style={{ fontWeight: "bolder", fontSize: "25px" }}>{detail?.data?.data?.title}</div>
        <div style={{ color: "#868e96", display: "flex" }}>
          <div style={{ textDecoration: "underline" }}>{detail?.data?.data?.category}</div>
          {/* <div>시간</div> */}
        </div>
        <br />
        <div>{detail?.data?.data?.content}</div>
        <br />
        <div>{detail?.data?.data?.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 원</div>
        {/* 관심, 조회수 인데 채팅수가 왔네유 */}
        <div>관심 {detail?.data?.data?.numOfWish} 채팅 {detail?.data?.data?.numOfChat}</div>
        <br />
      </Container>
      <Container style={{fontWeight:"600", justifyContent:"center"}}>
        이 게시글 신고하기
        </Container>
      <Container>
        <div style={{ fontWeight: "bolder", fontSize: "19px" }}>
          OO님의 판매상품
        </div>
        <SellerThingList id={detail?.data?.data?.sellerId} />        
      </Container>

      <Container>
        <div style={{ fontWeight: "bolder", fontSize: "19px" }}>
          OO님, 이건 어때요?
        </div>
        <RelationCard />
      </Container>
      {localStorage.getItem("name")!==detail?.data?.data?.nickname?
      <Plus>
        {like?.data?.data?
          <p onClick={()=>{unlikeThing();dispatch(likeThing(false))}}
          style={{display:"inline-block", marginLeft:"3%", color:"#ff5722"}}><FavoriteIcon/></p>
          :<p onClick={()=>{likeThing();dispatch(likeThing(false))}}
          style={{display:"inline-block", marginLeft:"3%"}}><FavoriteBorderIcon/></p>
        }
          <IconBtn onClick={()=>{createChat()}}>채팅하기</IconBtn>
      </Plus>
      :null}
    </div>
  );
};

export default TradeDetailCard;

const Container = styled.div`
  border-bottom: 1px solid #dee2e6;
  display: flex;
  flex-direction: column;
  min-height: 60px;
  margin: 20px;
`;

const MenuContainer = styled.div`
 /* position: absolute; */
  /* display:grid;
  grid-template-rows: 1fr 1fr;
  grid-template-areas: 
  'first second'; */
  
`
const First = styled.div`
  /* grid-area: first;
  float: left; */
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
`

const Second = styled.div`
  /* grid-area: second;
  float: right; */
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
`
const Plus = styled.div`
position : fixed;
width:100%;
bottom : 0;
margin-bottom:10px
justify-content:center;
align-items:center;
display:flex;
background-color:white;
`
const IconBtn = styled.div`
display:flex;
justify-content:center;
align-items:center;
border-radius:10px;
background-color: #ff5722;
width: 85%;
height: 50px;
color:white;
cursor:pointer;
float:right;
margin: 10px;
`