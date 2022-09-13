//나의 당근 헤더
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import { AppBar, Toolbar, IconButton, Typography, Box} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';


const ChattingHeader = (onClickDisconnectBtn) => {
  const navigate= useNavigate();
  const chatout = () => {
    if (window.confirm("채팅방을 나가시겠습니까?") === true) {
      onClickDisconnectBtn();
      navigate("/chat");
    } else { return false; }
  }
    return  (
        <Box sx={{ flexGrow: 1 }}>
        <ThemeProvider theme={whiteTheme}>
        <AppBar position="static" color="primary"
        style={{outline:"none", boxShadow:"none", borderBottom:"1.5px solid grey"}}>
          <Toolbar>
          <IconButton 
          size="large" 
          aria-label="search" 
          color="inherit" 
          onClick={()=>{navigate(-1)}}>
              <ArrowBackIosNewIcon/>
            </IconButton>
            <Typography
              variant="h5"
              noWrap
              component="div"
              sx={{ flexGrow: 1, alignSelf: 'center' }}
            >
            </Typography>
            <IconButton size="large" aria-label="search" color="inherit" style={{margin:"0px 30px 0px 0px"}}>
              <CallOutlinedIcon />
            </IconButton>
            <IconButton
              size="large"
              aria-label="display more actions"
              edge="end"
              color="inherit"
              onClick={()=>{chatout()}}
            >
              <MoreVertIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        </ThemeProvider>
      </Box>
    )
}

export default ChattingHeader;

const whiteTheme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
    },
  },
});