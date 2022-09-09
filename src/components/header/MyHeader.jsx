//나의 당근 헤더
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { AppBar, Toolbar, IconButton, Typography, Box} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';


const MyHeader = () => {
    return  (
        <Box sx={{ flexGrow: 1 }}>
        <ThemeProvider theme={whiteTheme}>
        <AppBar position="static" color="primary"
        style={{outline:"none", boxShadow:"none", borderBottom:"1.5px solid grey"}}>
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