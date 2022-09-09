// 바닥 메뉴
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction, Box  } from '@material-ui/core/';
import HomeIcon from '@mui/icons-material/Home';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import PinDropRoundedIcon from '@mui/icons-material/PinDropRounded';
import PinDropOutlinedIcon from '@mui/icons-material/PinDropOutlined';
import ForumIcon from '@mui/icons-material/Forum';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import PersonIcon from '@mui/icons-material/Person';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { makeStyles } from "@material-ui/core/styles"
import { ThemeProvider, createTheme } from '@mui/material/styles';

const useStyles = makeStyles(theme => ({  // style 요소 선언
    container:{                          // container이름의 객체에 스타일링 해주기
        backgroundColor:'white',
        position : "absolute",
        bottom:0,
        width:"100%",
        justifyContent:"space-between",
        borderTop: "1.5px solid grey"
    },
    color:{
        color:"black",

        "&.Mui-selected": {
            color:"black",
            fontWeight: "bold"
        },
    }

  }));
const Footer = ({ foot }) => {
    const classes = useStyles();
    const [value, setValue] = useState(foot)
    const navigate = useNavigate();
    return (
        <>
        <ThemeProvider theme={darkTheme}>
        <Box sx={{ flexGrow: 1, color: 'text.primary'}}>
            <BottomNavigation
                showLabels
                value={value}
                className={classes.container}
                onChange={(event, newValue) => {
                    console.log(event.target.value)
                    setValue(newValue);
                }}>
                {foot===0?
                <BottomNavigationAction 
                onClick={() => { navigate("/") }} 
                label="홈" 
                className={classes.color}
                icon={<HomeIcon />} />
                :<BottomNavigationAction 
                onClick={() => { navigate("/") }} 
                label="홈" 
                className={classes.color}
                icon={<HomeOutlinedIcon />} />
                }
                {foot===1?
                <BottomNavigationAction 
                onClick={() => { navigate("/post") }} 
                label="동네생활" 
                className={classes.color}
                icon={<LibraryBooksIcon />} />
                :<BottomNavigationAction 
                onClick={() => { navigate("/post") }} 
                label="동네생활" 
                className={classes.color}
                icon={<LibraryBooksOutlinedIcon />} />
                }
                {foot===2?
                <BottomNavigationAction 
                onClick={() => { navigate("/location") }} 
                label="내근처" 
                className={classes.color}
                icon={<PinDropRoundedIcon />} />
                :<BottomNavigationAction 
                onClick={() => { navigate("/location") }} 
                label="내근처" 
                className={classes.color}
                icon={<PinDropOutlinedIcon />} />
                }
                {foot===3?
                <BottomNavigationAction 
                onClick={() => { navigate("/chat") }} 
                label="채팅" 
                className={classes.color}
                icon={<ForumIcon />} />
                :<BottomNavigationAction 
                onClick={() => { navigate("/chat") }} 
                label="채팅" 
                className={classes.color}
                icon={<ForumOutlinedIcon />} />
                }
                {foot===4?
                <BottomNavigationAction 
                onClick={() => { navigate("/mypage") }} 
                label="나의당근" 
                className={classes.color}
                icon={<PersonIcon />} />
                :<BottomNavigationAction 
                onClick={() => { navigate("/mypage") }} 
                label="나의당근" 
                className={classes.color}
                icon={<PersonOutlineOutlinedIcon />} />
                }
            </BottomNavigation>
            </Box>
            </ThemeProvider>
            </>
    )
}

export default Footer;

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1976d2',
      },
    },
  });