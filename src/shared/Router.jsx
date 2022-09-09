import {Route, Routes, useNavigate} from "react-router-dom"
import { useEffect } from "react";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage"
import MyPage from "../pages/MyPage";

import TradeList from "../pages/TradeList"
import TradeDetail from "../pages/TradeDetail"
import TradeAdd from "../pages/TradeAdd";

import PostPage from "../pages/PostPage";
import PostDetail from "../pages/PostDetail";
import PostAdd from "../pages/PostAdd";

import ChatDetail from "../pages/ChatDetail";
import ChatPage from "../pages/ChatPage";
import Location from "../pages/Location";

// 페이지별 기능은 페이지 폴더에 방문하여 확인해주세요.
const Router = () => {
    let navigate = useNavigate();
    useEffect(()=>{
        let a = window.location.href.split("/")
        if(a[a.length-1]!=="login"&&a[a.length-1]!=="signup" ){
        if(localStorage.getItem("token1")===null){
            navigate("/login")
        }
        if(localStorage.getItem("token2")===null){
            navigate("/login")
        }
    }
    },[])
    return  (
        <>
        <Routes>
            <Route path="/" element={<TradeList/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/signup" element={<SignUpPage/>}/>
            <Route path="/tradeadd" element={<TradeAdd/>}/>
            <Route path="/tradedetail/:id" element={<TradeDetail/>}/>
            <Route path="/post" element={<PostPage/>}/>
            <Route path="/postadd" element={<PostAdd/>}/>
            <Route path="/postdetail/:id" element={<PostDetail/>}/>
            <Route path="/chat" element={<ChatPage/>}/>
            <Route path="/chatdetail/:id" element={<ChatDetail/>}/>
            <Route path="/mypage" element={<MyPage/>}/>
            <Route path="/location" element={<Location/>}/>
        </Routes>
        </>
    )
}

export default Router;