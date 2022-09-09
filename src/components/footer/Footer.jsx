// 바닥 메뉴
import { useState } from 'react';
import {BottomNavigation, BottomNavigationAction} from '@material-ui/core/';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import PinDropOutlinedIcon from '@mui/icons-material/PinDropOutlined';
import ForumIcon from '@mui/icons-material/Forum';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

const Footer = () => {
    const [value,setValue] = useState(0)
    return (
        <div>
            <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}>
                <BottomNavigationAction label="홈" icon={<HomeOutlinedIcon />} />
                <BottomNavigationAction label="동네생활" icon={<LibraryBooksOutlinedIcon />} />
                <BottomNavigationAction label="내근처" icon={<PinDropOutlinedIcon />} />
                <BottomNavigationAction label="채팅" icon={<ForumIcon />} />
                <BottomNavigationAction label="나의당근" icon={<PersonOutlineOutlinedIcon />} />
            </BottomNavigation>
        </div>
    )
}

export default Footer;