import PostCard from "./PostCard";
import styled from "styled-components";
import AddIcon from '@mui/icons-material/Add';

// 게시글
const Post = () => {
    return (
        <div>
            <div style={{height:"60px"}}/>
            <PostCard/>
            <Plus>
                <IconBtn><AddIcon /></IconBtn>
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