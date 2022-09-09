//http://localhost:3000/tradeadd

import React, {useState} from "react";
import styled from "styled-components";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { useNavigate } from "react-router-dom";

const TradeAddForm = () => {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <form>
      <Container
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <ArrowBackIcon
          onClick={() => {
            navigate("/");
          }}
        />
        <h3 style={{ marginLeft: "10px" }}>중고거래 글쓰기</h3>
        <h3 style={{marginLeft:"auto",color:"#dee2e6"}}>완료</h3>
      </Container>

      <Container>
        <div>
          <IconButton aria-label="upload picture" component="label">
            <input hidden accept="image/*" type="file" />
            <AddAPhotoIcon />
          </IconButton>
        </div>
      </Container>

      <Container>
      <TextField 
       multiline
       placeholder="제목" variant="standard"
          InputProps={{
            disableUnderline: true,
          }}/>
      </Container>

      <Container>
        <ListItemButton onClick={handleClick}>
          <ListItemText primary="카테고리" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="디지털 기기" />
            </ListItemButton>

            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="생활가전" />
            </ListItemButton>

            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="가구/인테리어" />
            </ListItemButton>

            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="생활/주방" />
            </ListItemButton>

            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="의류" />
            </ListItemButton>

            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="잡화" />
            </ListItemButton>
          </List>
        </Collapse>
      </Container>

      <Container>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <TextField 
           multiline
           placeholder="가격(선택사항)"
          variant="standard"
          InputProps={{
            disableUnderline: true,
          }}/>
          <FormControlLabel
            style={{ float: "right", marginLeft: "auto" }}
            control={<Checkbox name="gilad" />}
            label="가격제안받기"
          />
        </Box>
      </Container>

      <Container>
        <TextField
        placeholder="OO동에 올릴 게시글 내용을 작성해주세요."
        multiline
          variant="standard"
          InputProps={{
            disableUnderline: true,
          }}
          fullWidth
          style={{height:"400px",display:"block"}}
          id="fullWidth" />
      </Container>
    </form>
  );
};

export default TradeAddForm;

const Container = styled.div`
  border-bottom: 1px solid #dee2e6;
  display: flex;
  flex-direction: column;
  min-height: 60px;
  margin: 20px;
`;