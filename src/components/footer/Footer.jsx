// 바닥 메뉴
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {BottomNavigation, BottomNavigationAction} from '@material-ui/core/';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import PinDropOutlinedIcon from '@mui/icons-material/PinDropOutlined';
import ForumIcon from '@mui/icons-material/Forum';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

const Footer = ({foot}) => {
    const [value,setValue] = useState(foot)
    const navigate = useNavigate();
    return (
        <div>
            <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}>
                <BottomNavigationAction onClick={()=>{navigate("/")}} label="홈" icon={<HomeOutlinedIcon />} />
                <BottomNavigationAction onClick={()=>{navigate("/post")}} label="동네생활" icon={<LibraryBooksOutlinedIcon />} />
                <BottomNavigationAction onClick={()=>{navigate("/")}} label="내근처" icon={<PinDropOutlinedIcon />} />
                <BottomNavigationAction onClick={()=>{navigate("/chat")}} label="채팅" icon={<ForumIcon />} />
                <BottomNavigationAction onClick={()=>{navigate("/mypage")}} label="나의당근" icon={<PersonOutlineOutlinedIcon />} />
            </BottomNavigation>
        </div>
    )
}

export default Footer;