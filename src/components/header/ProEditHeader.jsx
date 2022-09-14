//나의 당근 헤더
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { AppBar, Toolbar, IconButton, Typography, Box } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';


const ProEditHeader = ({ name }) => {
  const navigate = useNavigate();

  const changeName = async () => {
    let data = await axios.put("http://3.34.5.30:8080/api/user/nickname", { value: name }, {
      headers: {
        authorization: localStorage.getItem('Authorization'),
        refreshtoken: localStorage.getItem('RefreshToken'),
      }
    }).then((data) => {
      alert(data.data.data)
      localStorage.setItem("Authorization", data.headers.authorization)
      localStorage.setItem("RefreshToken", data.headers.refreshtoken)
      localStorage.setItem("name", name)
      navigate("/profile")
    });
  }
  return (
    <Box sx={{ flexGrow: 1 }} style={{ position: "fixed", width: "100%" }}>
      <ThemeProvider theme={whiteTheme}>
        <AppBar position="static" color="primary"
          style={{ outline: "none", boxShadow: "none", borderBottom: "1.5px solid grey" }}>
          <Toolbar>
            <ArrowBackIosNewIcon style={{ cursor: "pointer" }} onClick={() => { navigate(-1) }} />
            <Typography
              variant="h5"
              noWrap
              component="div"
              sx={{ flexGrow: 1, alignSelf: 'center' }}
              style={{ marginLeft: "15px" }}
            >
              프로필 수정
            </Typography>
            <p
              size="large"
              aria-label="display more actions"
              edge="end"
              color="inherit"
              onClick={() => { changeName() }}
              style={{ height: "20px", fontSize: "20px", cursor: "pointer" }}>
              완료
            </p>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </Box>
  )
}

export default ProEditHeader;

const whiteTheme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
    },
  },
});