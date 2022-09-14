// 나의 당근 페이지
import Footer from "../components/footer/Footer";
import MyHeader from "../components/header/MyHeader";
import MyInfo from "../components/mypage/MyInfo";

const MyPage = () => {
    return  (
        <div>
            <MyHeader/>
            <MyInfo/>
            <Footer foot={4}/>
            <div style={{height:"50px"}}></div>
        </div>
    )
}

export default MyPage;