// 채팅 헤더
import styled from "styled-components";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import CropFreeIcon from '@mui/icons-material/CropFree';

const ChatHeader = () => {
    return  (
        <div>
            <p>채팅</p>
            <button><CropFreeIcon/></button>
            <button><NotificationsNoneIcon/></button>
        </div>
    )
}

export default ChatHeader;

const Headvar= styled.div`
display:block;
`