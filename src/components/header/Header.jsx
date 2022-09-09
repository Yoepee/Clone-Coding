// 홈, 동네생활, 내 근처 헤더 
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
    return (
        <div>
            <p>채팅</p>
            <button><SearchIcon /></button>
            <button><MenuIcon /></button>
            <button><NotificationsNoneIcon /></button>
        </div>
    )
}

export default Header;