// 동네 생활 게시글 리스트 페이지
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Post from "../components/post/Post";

const PostPage = () => {
    return  (
        <div>
            <Header head={"post"}/>
            <Post />
            <Footer foot={1}/>
            <div style={{height:"50px"}}></div>
        </div>
    )
}

export default PostPage;