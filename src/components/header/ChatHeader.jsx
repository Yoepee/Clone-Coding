// 채팅 헤더
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import CropFreeIcon from '@mui/icons-material/CropFree';
import { AppBar, Toolbar, IconButton, Typography, Box} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const ChatHeader = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
        <ThemeProvider theme={darkTheme}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography
              variant="h5"
              noWrap
              component="div"
              sx={{ flexGrow: 1, alignSelf: 'center' }}
            >
              채팅
            </Typography>
            <IconButton size="large" aria-label="search" color="inherit">
              <CropFreeIcon />
            </IconButton>
            <IconButton
              size="large"
              aria-label="display more actions"
              edge="end"
              color="inherit"
            >
              <NotificationsNoneIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        </ThemeProvider>
      </Box>
    )
}

export default ChatHeader;
  
const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1976d2',
      },
    },
  });