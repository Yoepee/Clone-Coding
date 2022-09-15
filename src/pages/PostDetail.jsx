import Comment from "../components/comment/Comment";
import BackHeader from "../components/header/BackHeader";
import PostDetailCard from "../components/post/PostDetailCard"

// 게시글 상세 페이지
const PostDetail = () => {
    return  (
        <div>
            <BackHeader/>
            <PostDetailCard/>
            <Comment/>
        </div>
    )
}

export default PostDetail;