// 홈, 동네생활, 내 근처 헤더 
import { useState } from 'react';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import GradingRoundedIcon from '@mui/icons-material/GradingRounded';
import CropFreeIcon from '@mui/icons-material/CropFree';
import { AppBar, Toolbar, IconButton, Typography, Box, FormControl, MenuItem } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Select from '@mui/material/Select';


const Header = ({ head }) => {
  const [place, setPlace] = useState("강남동");
  const [chk, setChk] = useState(false);

  return (
    <>
      <Box sx={{ flexGrow: 1 }} style={{ position: "fixed", width: "100%" }}>
        <ThemeProvider theme={whiteTheme}>
          <AppBar position="static" color="primary"
            style={{ outline: "none", boxShadow: "none", borderBottom: "1.5px solid grey" }}>

            <Toolbar>
              <FormControl>
                {!chk ?
                  <div onClick={() => { setChk(!chk) }} style={{cursor:"pointer"}}>{place} ▼</div>
                  : <>
                    <div onClick={() => { setChk(!chk) }} style={{cursor:"pointer"}}>{place} ▲</div>
                    <div style={{
                      width: "120px",
                      position: "absolute",
                      backgroundColor: "white",
                      top: "35px", left: "-10px",
                      textAlign: "center",
                      borderRadius: "5px",
                      border: "1px solid black"
                    }}>
                      <div style={{borderBottom:"1px solid black", padding:"3px", cursor:"pointer"}}
                      onClick={()=>{setPlace("강남동"); setChk(!chk);}}>강남동</div>
                      <div style={{borderBottom:"1px solid black", padding:"3px", cursor:"pointer"}}
                      onClick={()=>{setPlace("태장1동"); setChk(!chk)}}>태장1동</div>
                      <div style={{ padding:"3px", cursor:"pointer"}}>내 동네 설정</div>
                    </div>
                  </>
                }
                {/* <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          // labelId="demo-simple-select-standard-label"
          // inputProps={{ 'aria-label': 'Without label' }}
          // style={{outline:"0 none", border:"none", borderStyle:"none", "&:focus":{outline:"none"}}}
        >
          <MenuItem value="" >
            <em>강남동</em>
          </MenuItem>
          <MenuItem value={10}>교동</MenuItem>
          <MenuItem value={20}>입암동</MenuItem>
          <MenuItem value={30}>내 동네 설정</MenuItem>
        </Select> */}
              </FormControl>
              <Typography
                variant="h5"
                noWrap
                component="div"
                sx={{ flexGrow: 1, alignSelf: 'center' }}
              />

              <IconButton size="large" aria-label="search" color="inherit" style={{ margin: "0px 30px 0px 0px" }}>
                <SearchIcon />
              </IconButton>
              <IconButton size="large" aria-label="search" color="inherit" style={{ margin: "0px 30px 0px 0px" }}>
                {head === "home" ?
                  <MenuIcon />
                  : head === "post" ?
                    <GradingRoundedIcon />
                    : <CropFreeIcon />
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

const whiteTheme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
    },
  },
});