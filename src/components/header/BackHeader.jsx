//나의 당근 헤더
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { AppBar, Toolbar, IconButton, Typography, Box} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';


const BackHeader = () => {
    const navigate = useNavigate();
    return  (
        <Box sx={{ flexGrow: 1 }}>
        <ThemeProvider theme={whiteTheme}>
        <AppBar position="static" color="primary"
        style={{outline:"none", boxShadow:"none", borderBottom:"1.5px solid grey"}}>
          <Toolbar>
          <IconButton 
          margin="10px"
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
            <IconButton
              size="large"
              aria-label="display more actions"
              edge="end"
              color="inherit"
            >
              <MoreVertIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        </ThemeProvider>
      </Box>
    )
}

export default BackHeader;

const whiteTheme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
    },
  },
});