import PostCard from "./PostCard";
import styled from "styled-components";
import AddIcon from '@mui/icons-material/Add';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getPost } from "../../redux/modules/post";
import { Navigate, useNavigate } from "react-router-dom";


// 게시글
const Post = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const post = useSelector((state =>state?.getPost?.data?.data))
    console.log(post)

    useEffect(() => {
          dispatch(__getPost());
      }, [dispatch]);


    return (
        <div>
            <div style={{height:"60px"}}/>
            {post?.map((post, i)=>{return <PostCard post={post} key= {i}/>})}
            
            <Plus onClick ={()=>{navigate("/postadd")}}>
                <IconBtn><AddIcon  /></IconBtn>
            </Plus>
        </div>
    )
}

export default Post;

const Plus = styled.div`
position : fixed;
bottom : 0;
right: 5%;
margin-bottom:80px
`
const IconBtn = styled.div`
display:flex;
justify-content:center;
align-items:center;
border-radius:50%;
background-color: #ff5722;
width: 50px;
height: 50px;
color:white;
cursor:pointer;
`