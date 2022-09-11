import Comment from "../components/comment/comment";
import ChattingHeader from "../components/header/ChattingHeader";
import InputFooter from "../components/footer/InputFooter"

// 실시간 채팅 페이지
const ChatDetail = () => {
    return  (
        <div>
            <ChattingHeader/>
            <Comment/>
            <InputFooter/>
        </div>
    )
}

export default ChatDetail;