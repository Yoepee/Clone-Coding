// 채팅 목록 페이지
import ChatList from "../components/chatList/ChatList";
import ChatHeader from "../components/header/ChatHeader";
import Footer from "../components/footer/Footer";

const ChatPage = () => {
    return  (
        <div>
            <ChatHeader/>
            <ChatList/>
            <Footer/>
        </div>
    )
}

export default ChatPage;