// 홈, 동네생활, 내 근처 헤더 
import { useState } from 'react';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import GradingRoundedIcon from '@mui/icons-material/GradingRounded';
import CropFreeIcon from '@mui/icons-material/CropFree';
import { AppBar, Toolbar, IconButton, Typography, Box, FormControl,MenuItem} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const Header = ({head}) => {
    const [age, setAge] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
    return (
        <>
        <Box sx={{ flexGrow: 1 }}>
        <ThemeProvider theme={darkTheme}>
        <AppBar position="static" color="primary">
          <Toolbar>
          <FormControl>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>강남동</em>
          </MenuItem>
          <MenuItem value={10}>교동</MenuItem>
          <MenuItem value={20}>입암동</MenuItem>
          <MenuItem value={30}>내 동네 설정</MenuItem>
        </Select>
      </FormControl>
            <Typography
              variant="h5"
              noWrap
              component="div"
              sx={{ flexGrow: 1, alignSelf: 'center' }}
            />

            <IconButton size="large" aria-label="search" color="inherit">
              <SearchIcon />
            </IconButton>
            <IconButton size="large" aria-label="search" color="inherit">
            {head==="home"?
              <MenuIcon />
              :head==="post"?
                <GradingRoundedIcon/>
                :<CropFreeIcon/>
            }
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
        </>
    )
}

export default Header;

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1976d2',
      },
    },
  });