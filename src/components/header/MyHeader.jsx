//나의 당근 헤더
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { AppBar, Toolbar, IconButton, Typography, Box } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const MyHeader = () => {
  const navigate = useNavigate();

  const logout = async () => {
    if (window.confirm("로그아웃 하시겠습니까?") === true) {
      let a = await axios.post("http://3.34.5.30/api/logout",{
        headers: {
            Authorization: localStorage.getItem('Authorization'),
            RefreshToken: localStorage.getItem('Refreshtoken'),
      }});
      if (a?.data?.success === false) {
        alert(a?.data?.data)
        return
      }
      console.log(a);
      localStorage.removeItem("Authorization")
      localStorage.removeItem("Refreshtoken")
      localStorage.removeItem("name")
      navigate("/intro");
    } else { return false; }
  }
  return (
    <Box sx={{ flexGrow: 1 }} style={{position:"fixed", width:"100%"}}>
      <ThemeProvider theme={whiteTheme}>
        <AppBar position="static" color="primary"
          style={{ outline: "none", boxShadow: "none", borderBottom: "1.5px solid grey" }}>
          <Toolbar>
            <Typography
              variant="h5"
              noWrap
              component="div"
              sx={{ flexGrow: 1, alignSelf: 'center' }}
            >
              나의 당근
            </Typography>
            <IconButton
              size="large"
              aria-label="display more actions"
              edge="end"
              color="inherit"
              onClick={() => { logout() }}
            >
              <SettingsOutlinedIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </Box>
  )
}

export default MyHeader;

const whiteTheme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
    },
  },
});