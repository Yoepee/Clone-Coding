import Comment from "../components/comment/comment";
import ChattingHeader from "../components/header/ChattingHeader";
import ChatFooter from "../components/footer/ChatFooter"

// 실시간 채팅 페이지
const ChatDetail = () => {
    return  (
        <div>
            <ChattingHeader/>
            <Comment/>
            <ChatFooter/>
        </div>
    )
}

export default ChatDetail;